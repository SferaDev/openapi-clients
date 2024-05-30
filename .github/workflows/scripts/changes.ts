import { exec } from 'child_process';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getChangeDiff() {
  return new Promise<string>((resolve, reject) => {
    exec('git diff', { maxBuffer: 1024 * 500 }, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function writeChangesetFile(projectName: string, type: string, description: string) {
  const rootDir = process.cwd();
  const changesetDir = path.join(rootDir, '.changeset');
  const randomName = Math.random().toString(36).substring(7);
  const changesetPath = path.join(changesetDir, `${randomName}.md`);
  const content = `---\n"${projectName}": ${type}\n---\n\n${description}`;

  if (!fs.existsSync(changesetDir)) {
    fs.mkdirSync(changesetDir);
  }

  fs.writeFileSync(changesetPath, content);
}

async function main() {
  const projectName = process.argv[2];
  if (!projectName) throw new Error('Project name not provided');

  try {
    const diff = await getChangeDiff();
    if (diff.trim().length === 0) {
      console.log('No changes detected');
      return;
    }

    const prompt = `
    You are an assistant to a software developer working on a project called "${projectName}".
    The developer has asked you to write a changelog entry for the API they are working on.
    You need to document the changelog for the API from the git diff.
    You can create multiple changelog entries to match the number of changes in the API.
    Description must be a short sentence.
    If there's a breaking change, add "[BREAKING]" to the beginning of the description.
    Only use "patch" or "minor" changes in a 0.x.x semver versioning scheme. Unless it's a version bump, everything is a "patch".
    
    The output should be a JSON object with the following format:
    Array<{
        description: string,
        type: "patch" | "minor"
    }>

    Example:
    [
      {
        "description": "Add new endpoint to get user info",
        "type": "minor"
      },
      {
        "description": "Fix bug in user info endpoint",
        "type": "patch"
      }
    ]
  `;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: diff }
      ],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' }
    });

    const { content: output } = completion.choices[0].message;
    const json = JSON.parse(output ?? '');
    const changes = Array.isArray(json) ? json : [json];

    for (const { type, description } of changes) {
      await writeChangesetFile(projectName, type, description);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
