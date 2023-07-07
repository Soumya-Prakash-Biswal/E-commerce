import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '@/lib/mongodb'

export default NextAuth({
  providers: [
     
    GoogleProvider({
      clientId: "159349108257-m368pas1dsb5r5n5j6hskggo3pnt8t8c.apps.googleusercontent.com",
      clientSecret:  "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"
    }),
     
  ],
  adapter:MongoDBAdapter(clientPromise),
})