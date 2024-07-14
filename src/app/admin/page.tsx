"use client";

import React from 'react'
import Login from '../components/Admin/Login'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const page = () => {

  const { data: session } = useSession();
  const userName = session?.user?.name

  return (
    <div>
      {session ?(
        <>
          <div>Welcome {userName}</div>
          <Link href='/admin/imageUpload'>
            <button className='bg-black rounded-xl text-md p-2 text-white'>Upload Image</button>
          </Link>
        </>
      ):(
        <Login/>
      )}
    </div>
  )
}

export default page