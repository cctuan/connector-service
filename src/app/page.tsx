import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignInButton from "@/components/SignInButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("No session");
    return <SignInButton></SignInButton>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
