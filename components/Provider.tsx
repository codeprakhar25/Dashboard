'use client'
import React, { Children } from 'react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

const Provider = ({children,session}:any) => {
  return (
   <SessionProvider session={session}>
{children}
   </SessionProvider>
  )
}

export default Provider
