'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SignIn, useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Page() {
  const { isSignedIn } = useAuth()
  const router = useRouter()
  const user = useUser()
  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, router])

  if (isSignedIn === undefined) {
    return <div>Loading...</div>
  }

  if (isSignedIn) {
    return (
      <div>
        <h1>Hello, {user?.user?.firstName || 'User'}!</h1>
        <Link href="/dashboard">
           Go to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div>
      <SignIn />
    </div>
  )
}

export default Page