"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import type { Provider } from "@/lib/types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProviderTabsProps {
  providers: Provider[]
}

export function ProviderTabs({ providers }: ProviderTabsProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeProviderTab") || providers[0]?.slug || ""
    }
    return providers[0]?.slug || ""
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeProviderTab", activeTab)
    }
  }, [activeTab])


  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          {providers.map((provider) => (
            <TabsTrigger key={provider.slug} value={provider.slug} className="flex items-center gap-2">
              {provider.logo}
              <span className="hidden sm:inline">{provider.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {providers.map((provider) => (
          <TabsContent key={provider.slug} value={provider.slug} className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {provider.logo}
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{provider.name}</CardTitle>
                    <CardDescription className="text-base mt-2">{provider.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="usage" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="usage">Usage Example</TabsTrigger>
                    <TabsTrigger value="install">Installation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="usage" className="mt-4">
                    <CodeBlock language="typescript" code={provider.usage} />
                  </TabsContent>
                  <TabsContent value="install" className="mt-4">
                    <Tabs defaultValue="npm" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                      </TabsList>
                      <TabsContent value="npm" className="mt-4">
                        <CodeBlock language="bash" code={`npm install @sferadev/openapi-${provider.slug}`} />
                      </TabsContent>
                      <TabsContent value="yarn" className="mt-4">
                        <CodeBlock language="bash" code={`yarn add @sferadev/openapi-${provider.slug}`} />
                      </TabsContent>
                      <TabsContent value="pnpm" className="mt-4">
                        <CodeBlock language="bash" code={`pnpm add @sferadev/openapi-${provider.slug}`} />
                      </TabsContent>
                    </Tabs>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <Badge variant="outline" className="text-sm">v{provider.version}</Badge>
                <Link
                  href={`https://github.com/SferaDev/openapi-clients/blob/main/packages/${provider.slug}/openapi.json`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  OpenAPI Spec
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}