'use client'
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInButton() {
  return <button onClick={() => signIn()}>sign in</button>;
}
