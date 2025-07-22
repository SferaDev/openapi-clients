const packages = [
  'vercel-api-js',
  'cloudflare-api-js',
  'netlify-api',
  'keycloak-api',
  'zoom-api-js',
  'dhis2-openapi',
  'nuki-api-js',
  'litellm-api',
  'v0-api'
];

async function fetchPackageVersion(packageName: string): Promise<Record<string, string>> {
  try {
    const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const packageInfo = await response.json();

    return {
      name: packageName,
      version: packageInfo.version || 'unknown',
      description: packageInfo.description || 'Package not found on npm'
    };
  } catch (error) {
    console.warn(`Warning: Could not fetch ${packageName}:`, error);
    return {
      name: packageName,
      version: 'unknown',
      description: 'Package not found on npm'
    };
  }
}

export async function fetchAllPackageVersions(): Promise<Record<string, string>> {
  const packageInfos = await Promise.all(packages.map((pkg) => fetchPackageVersion(pkg)));

  const versionMap: Record<string, string> = {};
  packageInfos.forEach((info) => {
    versionMap[info.name] = info.version;
  });

  return versionMap;
}
