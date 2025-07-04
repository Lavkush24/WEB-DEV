import NextAuth from "next-auth";
import { AUTH_OPT } from "../../lib/Auth";

const handler = NextAuth(AUTH_OPT);

export const GET = handler;
export const POST = handler;