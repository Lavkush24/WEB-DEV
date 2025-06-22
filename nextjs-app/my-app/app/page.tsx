import Image from "next/image";
import axios from "axios";
import { PrismaClient } from "@/app/generated/prisma";
import client from "@/db"


async function getUser() {
  const user = await client.userNext.findFirst();

  return {
    id: user?.id,
    username: user?.username
  }
}

export default async function Home() {
  const userDetail = await getUser();

  return (
    // <div className="flex flex-col justify-center items-center "> 
    //   <div >
    //     <div className="text-3xl p-5">
    //       {userDetail.username}
    //     </div>
    //     <div className="text-lg p-5">
    //       { userDetail.email }
    //     </div>
    //   </div>
    // </div>
    <div>
      <div>{ userDetail.id }</div>
      <div>{ userDetail.username }</div>
    </div>
  );
}
