import { McpAuth } from "@mcpauth/auth";
import { auth } from "./auth";

export const mcpAuth = McpAuth({
  authenticateUser: async (req) => {
    // Extract session from request - better-auth integration
    try {
      const authHeader = req.headers.get('Authorization');
      if (!authHeader?.startsWith('Bearer ')) {
        return null;
      }
      
      const token = authHeader.replace('Bearer ', '');
      
      // For now, return a basic user object if token exists
      // In production, you'd validate the token against better-auth session
      if (token) {
        return {
          id: "user-123",
          name: "Authenticated User",
          email: "user@example.com"
        };
      }
      
      return null;
    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }
});