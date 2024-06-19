import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "../app/components/UserCard"


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <>
      {session ? (
          <UserCard user={session?.user} pagetype={"Home"}/>
        ):(
          <h1>You Shall Not Pass</h1>
        )}
    </>
  );
}
