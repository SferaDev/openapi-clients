import Link from 'next/link';
import { HeroHeader } from '@/components/hero-header';
import { UnifiedProviderInterface } from '@/components/provider-card';
import { fetchAllPackageVersions } from '@/lib/npm';
import type { Provider } from '@/lib/types';

// ISR: Revalidate every 6 hours
export const revalidate = 21600;

// This will be replaced by server-side data
const getProviders = (versions: Record<string, string>) =>
  [
    {
      id: 'vercel',
      name: 'Vercel',
      packageName: 'vercel-api-js',
      version: versions['vercel-api-js'],
      usage: `import { VercelApi } from 'vercel-api-js';

const vercel = new VercelApi({ token: "token" });
const { projects } = await vercel.api.projects.getProjects();`,
      hasMcp: true
    },
    {
      id: 'v0',
      name: 'v0',
      packageName: 'v0-api',
      version: versions['v0-api'],
      usage: `import { V0Api } from 'v0-api';

const api = new V0Api({ token: '...' });
const projects = await api.api.projects.getProjects();`
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      packageName: 'cloudflare-api-js',
      version: versions['cloudflare-api-js'],
      usage: `import { CloudflareApi } from 'cloudflare-api-js';

const api = new CloudflareApi({ apiKey: '...', email: '...' });
const zones = await api.zones.getZones({});`
    },
    {
      id: 'netlify',
      name: 'Netlify',
      packageName: 'netlify-api',
      version: versions['netlify-api'],
      usage: `import { NetlifyApi } from 'netlify-api';

const api = new NetlifyApi({ accessToken: '...' });
const sites = await api.sites.listSites({});`
    },
    {
      id: 'keycloak',
      name: 'Keycloak',
      packageName: 'keycloak-api',
      version: versions['keycloak-api'],
      usage: `import { KeycloakApi } from 'keycloak-api';

const api = new KeycloakApi({ basePath: '...' });
const realms = await api.admin.realms.getRealms({});`
    },
    {
      id: 'zoom',
      name: 'Zoom',
      packageName: 'zoom-api-js',
      version: versions['zoom-api-js'],
      usage: `import { ZoomApi } from 'zoom-api-js';

const api = new ZoomApi({ bearer: '...' });
const users = await api.meeting.users.getUsers({});`
    },
    {
      id: 'nuki',
      name: 'Nuki',
      packageName: 'nuki-api-js',
      version: versions['nuki-api-js'],
      usage: `import { NukiApi } from 'nuki-api-js';

const api = new NukiApi({ apiKey: '...' });
const smartLocks = await api.api.smartLocks.getSmartLocks();`
    },
    {
      id: 'litellm',
      name: 'LiteLLM',
      packageName: 'litellm-api',
      version: versions['litellm-api'],
      usage: `import { LiteLLMApi } from 'litellm-api';

const api = new LiteLLMApi({ baseUrl: '...', apiKey: '...' });
const models = await api.api.models.getModels();`
    }
  ] satisfies Provider[];

export default async function HomePage() {
  // Fetch versions server-side with ISR
  const versions = await fetchAllPackageVersions();
  const providers = getProviders(versions);

  return (
    <div className="bg-gray-50/50 dark:bg-gray-900/50 text-foreground min-h-screen">
      <HeroHeader />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <main>
          <section id="providers" className="mb-16">
            <UnifiedProviderInterface providers={providers} />
          </section>
        </main>

        <footer className="text-center text-muted-foreground mt-16 border-t pt-6">
          <p className="text-sm">
            Built and maintained by{' '}
            <Link
              href="https://github.com/SferaDev"
              className="font-medium underline hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              SferaDev
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
