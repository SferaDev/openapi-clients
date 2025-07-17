'use client';

import { CodeXml, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function HeroHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-background/50 border-b">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center pt-16 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Unofficial Type-Safe OpenAPI Clients
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto">
              A collection of automatically generated and updated API clients for popular services
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Header (only visible when scrolled) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'translate-y-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm'
            : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <CodeXml className="h-5 w-5" />
              <span className="font-bold text-lg tracking-tight">OpenAPI Clients</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/SferaDev/openapi-clients" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
