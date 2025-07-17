import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import type { Provider } from "@/lib/types"
import { Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProviderCardProps {
  provider: Provider
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex-row items-start gap-4">
        {provider.logo}
        <div className="flex-1">
          <CardTitle>{provider.name}</CardTitle>
          <CardDescription>{provider.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="install">Install</TabsTrigger>
          </TabsList>
          <TabsContent value="usage" className="mt-4">
            <CodeBlock language="typescript" code={provider.usage} />
          </TabsContent>
          <TabsContent value="install" className="mt-4">
            <CodeBlock language="bash" code={`npm install @sferadev/openapi-${provider.slug}`} />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <Badge variant="outline">v{provider.version}</Badge>
        <Link
          href={`https://github.com/SferaDev/openapi-clients/tree/main/packages/${provider.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          Source
        </Link>
      </CardFooter>
    </Card>
  )
}
