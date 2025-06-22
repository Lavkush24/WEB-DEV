import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@/app/generated/prisma";
import client from "@/db"

// export async function GET({req: NextRequest}) {
//     let { id } = req;
//     const user = await client.user.get({
//         where: {
//             id: id
//         }
//     })
//     return Response.json({
//         username: user.username,
//         email: user.email
//     })
// }

export async function POST(req:NextRequest) {
    const body = await req.json();
    try {
        const user = await client.userNext.create({
            data: {
                username: body.username,
                password: body.password
            }
        });

        return NextResponse.json({
            user
        })

    }catch(e) {
        return NextResponse.json({
            message: "Error in saving data..."
        },{
            status: 411
        })
    }
}

