"use client";

import React from 'react'
import Login from '../components/Admin/Login'
import { useSession } from 'next-auth/react';

const Admin = () => {

  const { data: session } = useSession();

  return (
    <div>
      {session ?(
        <h1>Welcome, {session?.user?.name}</h1>
      ):(
        <Login/>
      )}
    </div>
  )
}

export default Admin