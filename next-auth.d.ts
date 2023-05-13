import NextAuth, { DefaultUser } from "next-auth";

// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken: string;
//     refreshToken: string;
//     iat: number;
//     exp: number;
//     jti: string;
//     sub: string;
//   }
// }

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultUser;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    accessToken: string;
    refreshToken: string;
  }
}
