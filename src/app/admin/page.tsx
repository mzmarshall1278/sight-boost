"use client";

import React from 'react'
import Login from '../components/Admin/Login'
import { useSession } from 'next-auth/react';

const page = () => {

  const { data: session } = useSession();

  return (
    <div>
      {session ?(
        <div>User is logged in</div>
      ):(
        <Login/>
      )}
    </div>
  )
}

export default page