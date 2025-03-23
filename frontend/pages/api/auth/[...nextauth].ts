import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosClient from "@/utils/axiosClient";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        let user;
        try{
          const response = await axiosClient.post("api/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
          if (response.data?.data?.user) {
            user = response.data.data.user;
            return user
          } else {
            throw new Error("User not found in response");
        }
        }catch(err){
          console.log(err)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut:"/"
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect() {
      const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL  // Use environment variable for client-side URL
      return `${clientUrl}/`; // Redirect to the client-side URL (e.g., localhost:8080)
    },
  },
};

export default NextAuth(authOptions);
