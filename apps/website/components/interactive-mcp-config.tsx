"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import type { Provider } from "@/lib/types"

interface InteractiveMcpConfigProps {
  providers: Provider[]
}

const generateMcpConfig = (provider: Provider) => `{
  "mcpServers": {
    "${provider.name}": {
      "url": "https://api.sferadev.com/mcp/${provider.slug}"
    }
  }
}`

export function InteractiveMcpConfig({ providers }: InteractiveMcpConfigProps) {
  const [selectedProvider, setSelectedProvider] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("activeMcpProvider")
      return providers.find(p => p.slug === saved) || providers[0]
    }
    return providers[0]
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeMcpProvider", selectedProvider.slug)
    }
  }, [selectedProvider])

  const handleTabChange = (slug: string) => {
    const provider = providers.find((p) => p.slug === slug)
    if (provider) {
      setSelectedProvider(provider)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value={selectedProvider.slug} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          {providers.map((provider) => (
            <TabsTrigger key={provider.slug} value={provider.slug} className="flex items-center gap-2">
              <span className="hidden sm:inline">{provider.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {providers.map((provider) => (
          <TabsContent key={provider.slug} value={provider.slug} className="mt-6">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl">MCP Configuration for {provider.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Use this configuration in your AI agent (e.g., in `.cursor/mcp.json`) to connect to the {provider.name} API.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="config" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="config">Configuration</TabsTrigger>
                    <TabsTrigger value="example">Usage Example</TabsTrigger>
                  </TabsList>
                  <TabsContent value="config" className="mt-4">
                    <CodeBlock language="json" code={generateMcpConfig(provider)} />
                  </TabsContent>
                  <TabsContent value="example" className="mt-4">
                    <CodeBlock 
                      language="typescript" 
                      code={`// Example usage in your AI agent
const mcp = new MCPClient("${provider.name}");
await mcp.connect();

// Now you can use natural language to interact with ${provider.name}
const result = await mcp.call("${provider.name}", {
  action: "list_${provider.slug === 'vercel' ? 'projects' : provider.slug === 'netlify' ? 'sites' : 'resources'}",
  // ... other parameters
});`}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
