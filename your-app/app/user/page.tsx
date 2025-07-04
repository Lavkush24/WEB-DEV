import { getServerSession } from "next-auth"
import { AUTH_OPT } from "../api/lib/Auth";


export default async function () {
    const session = await getServerSession(AUTH_OPT);
    return <div>
        {JSON.stringify(session)}
    </div>
}