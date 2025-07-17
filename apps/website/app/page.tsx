import { UnifiedProviderInterface } from "@/components/unified-provider-interface"
import { HeroHeader } from "@/components/hero-header"
import { fetchAllPackageVersions } from "@/lib/npm"
import Link from "next/link"

// ISR: Revalidate every 6 hours
export const revalidate = 21600

// This will be replaced by server-side data
const getProviders = (versions: Record<string, any>) => [
  {
    name: "Vercel",
    slug: "vercel-api-js",
    description: "Client for the Vercel API, enabling programmatic control over projects, deployments, and domains.",
    version: versions['vercel-api-js']?.version || "1.0.0",
    usage: `import { VercelApi } from 'vercel-api-js';

const vercel = new VercelApi({ token: "token" });
const { projects } = await vercel.api.projects.getProjects();`,
    hasMcp: true,
  },
  {
    name: "Cloudflare",
    slug: "cloudflare-api-js",
    description: "Interact with the Cloudflare API for DNS, Workers, and other cloud services.",
    version: versions['cloudflare-api-js']?.version || "0.15.3",
    usage: `import { CloudflareApi } from 'cloudflare-api-js';

const api = new CloudflareApi({ apiKey: '...', email: '...' });
const zones = await api.zones.getZones({});`,
  },
  {
    name: "Netlify",
    slug: "netlify-api",
    description: "A type-safe client for the Netlify API to manage sites, builds, and deploys.",
    version: versions['netlify-api']?.version || "0.10.1",
    usage: `import { NetlifyApi } from 'netlify-api';

const api = new NetlifyApi({ accessToken: '...' });
const sites = await api.sites.listSites({});`,
  },
  {
    name: "Keycloak",
    slug: "keycloak-api",
    description: "Manage realms, users, and clients in your Keycloak identity and access management server.",
    version: versions['keycloak-api']?.version || "0.2.6",
    usage: `import { KeycloakApi } from 'keycloak-api';

const api = new KeycloakApi({ basePath: '...' });
const realms = await api.admin.realms.getRealms({});`,
  },
  {
    name: "Zoom",
    slug: "zoom-api-js",
    description: "Programmatically manage Zoom meetings, webinars, users, and recordings.",
    version: versions['zoom-api-js']?.version || "0.6.0",
    usage: `import { ZoomApi } from 'zoom-api-js';

const api = new ZoomApi({ bearer: '...' });
const users = await api.meeting.users.getUsers({});`,
  },
  {
    name: "DHIS2",
    slug: "dhis2-openapi",
    description: "Client for DHIS2, the open-source health information management platform.",
    version: versions['dhis2-openapi']?.version || "0.2.0",
    usage: `import { Dhis2Api } from 'dhis2-openapi';

const api = new Dhis2Api({ basePath: '...' });
const orgUnits = await api.v40.organisationUnits.getOrganisationUnits();`,
  },
  {
    name: "Nuki",
    slug: "nuki-api-js",
    description: "Type-safe client for the Nuki smart lock API to manage locks and access control.",
    version: versions['nuki-api-js']?.version || "0.1.0",
    usage: `import { NukiApi } from 'nuki-api-js';

const api = new NukiApi({ apiKey: '...' });
const smartLocks = await api.api.smartLocks.getSmartLocks();`,
  },
  {
    name: "LiteLLM",
    slug: "litellm-api",
    description: "Client for LiteLLM proxy server to manage AI model routing and load balancing.",
    version: versions['litellm-api']?.version || "0.0.3",
    usage: `import { LiteLLMApi } from 'litellm-api';

const api = new LiteLLMApi({ baseUrl: '...', apiKey: '...' });
const models = await api.api.models.getModels();`,
  },
  {
    name: "v0",
    slug: "v0-api",
    description: "Unofficial client for the Vercel v0 API to generate and manage AI-powered UI components.",
    version: versions['v0-api']?.version || "0.0.1",
    usage: `import { V0Api } from 'v0-api';

const api = new V0Api({ token: '...' });
const projects = await api.api.projects.getProjects();`,
    hasMcp: true,
  },
]

export default async function HomePage() {
  // Fetch versions server-side with ISR
  const versions = await fetchAllPackageVersions()
  const providers = getProviders(versions)
  
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
            Built and maintained by{" "}
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
  )
}