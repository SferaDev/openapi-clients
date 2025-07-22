'use client';

import { BotMessageSquare, CodeXml } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CodeBlock } from '@/components/code-block';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Provider } from '@/lib/types';

interface UnifiedProviderInterfaceProps {
  providers: Provider[];
}

const generateMcpConfig = (provider: Provider) => `{
  "mcpServers": {
    "${provider.id}": {
      "url": "https://openapi.sferadev.com/api/${provider.id}/mcp"
    }
  }
}`;

export function UnifiedProviderInterface({ providers }: UnifiedProviderInterfaceProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('activeProviderTab') || providers[0]?.id || '';
    }
    return providers[0]?.id || '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeProviderTab', activeTab);
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Provider Selection Tabs */}
      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 h-auto p-1">
            {providers.map((provider) => (
              <TabsTrigger key={provider.id} value={provider.id} className="py-2 text-sm font-medium">
                {provider.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Content Sections */}
      {providers.map((provider) => (
        <div key={provider.id} className={`${activeTab === provider.id ? 'block' : 'hidden'}`}>
          <div className={`grid grid-cols-1 gap-6 h-full ${provider.hasMcp ? 'xl:grid-cols-2' : 'xl:grid-cols-1'}`}>
            {/* TypeScript SDK Section */}
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-center gap-3 pb-4">
                <CodeXml className="h-6 w-6" />
                <CardTitle className="text-xl font-bold tracking-tight">TypeScript SDK</CardTitle>
                <Badge variant="outline" className="text-xs">
                  v{provider.version}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 space-y-5">
                <div>
                  <h3 className="text-base font-semibold mb-2">Installation</h3>
                  <Tabs defaultValue="pnpm" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-8">
                      <TabsTrigger value="pnpm" className="text-xs">
                        pnpm
                      </TabsTrigger>
                      <TabsTrigger value="npm" className="text-xs">
                        npm
                      </TabsTrigger>
                      <TabsTrigger value="yarn" className="text-xs">
                        yarn
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="pnpm" className="mt-3">
                      <CodeBlock language="bash" code={`pnpm add ${provider.packageName}`} />
                    </TabsContent>
                    <TabsContent value="npm" className="mt-3">
                      <CodeBlock language="bash" code={`npm install ${provider.packageName}`} />
                    </TabsContent>
                    <TabsContent value="yarn" className="mt-3">
                      <CodeBlock language="bash" code={`yarn add ${provider.packageName}`} />
                    </TabsContent>
                  </Tabs>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">Usage Example</h3>
                  <CodeBlock language="typescript" code={provider.usage} />
                </div>
              </CardContent>
            </Card>

            {/* MCP Integration Section - Only show if provider has MCP */}
            {provider.hasMcp && (
              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center justify-center gap-3 pb-4">
                  <BotMessageSquare className="h-6 w-6" />
                  <CardTitle className="text-xl font-bold tracking-tight">MCP Server</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div>
                    <h3 className="text-base font-semibold mb-2">Configuration</h3>
                    <CodeBlock language="json" code={generateMcpConfig(provider)} />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
