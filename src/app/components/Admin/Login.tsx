"use client";

import { getProviders, signIn, signOut, useSession, ClientSafeProvider, LiteralUnion } from "next-auth/react";
// import { BuiltInProviderType } from "next-auth/providers";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

const Login = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState<Record<LiteralUnion<string>, ClientSafeProvider> | null>(null);
  
    useEffect(() => {
      (async () => {
        const res = await getProviders();
        setProviders(res);
      })();
    }, []);

  return (
    <div className='my-12 md:w-fit w-[80%] items-center justify-center bg-white shadow-lg py-8 px-12 mx-auto text-center'>
        <span className=''>
          <Image
            src='/logo.png'
            alt='not logged in'
            width={300}
            height={300}
            className='object-contain'
          />
        </span>
        <h1 className='text-xl font-bold text-center mb-4'>Sign In to Continue</h1>
        <div className=''>
          {session?.user ? (
            <div className='flex gap-3 md:gap-5'>

              <button type='button' onClick={() => signOut} className='auth_black_btn'>
                Sign Out
              </button>

            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className='auth_black_btn'
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
    </div>
  )
}

export default Login