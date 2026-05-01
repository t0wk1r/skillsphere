import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { getDB } from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(await getDB()),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  user: {
    additionalFields: {
      image: {
        type: "string",
        required: false,
      },
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});