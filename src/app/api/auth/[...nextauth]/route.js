import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import bcrypt from 'bcryptjs';
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "712508071750-amak6mbf6250eb4f28cdk13miln0631b.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials){
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordCorrect) {
              return user;
            } else{
              throw new Error("Wrong credentials!")
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },        
    }),
  ],
  pages: {
    error: "/dashboard/login"
  },
});

export { handler as GET, handler as POST };