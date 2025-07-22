import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET || "your-secret-key-here",
  database: {
    provider: "sqlite",
    url: "sqlite://./database.db"
  },
  socialProviders: {
    // We'll configure Vercel OAuth here when the user provides credentials
    // For now, using a generic OAuth2 setup
    github: {
      clientId: process.env.VERCEL_CLIENT_ID || "",
      clientSecret: process.env.VERCEL_CLIENT_SECRET || "",
      // Custom Vercel OAuth endpoints would go here
    }
  }
});

export type Session = typeof auth.$Infer.Session;