import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { AUTH_OPT } from "../lib/Auth";


export async function GET() {
    const session = await getServerSession(AUTH_OPT);
    return NextResponse.json(
        {session}
    )
}