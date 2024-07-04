"use client";

import Form from '@/app/components/Admin/Form'
import Login from '@/app/components/Admin/Login';
import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <Form/>
      ):(
        <Login/>
      )}
    </div>
  )
}

export default page