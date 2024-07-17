"use client";

import React from "react";
import Login from "../components/Admin/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Admin = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;

  return (
    <div>
      {session ?(
        <>
          <h1 className="text-center text-4xl text-teal-900 font-semibold mt-12">
            Welcome, {session?.user?.name}
          </h1>
          <p className="text-center mt-4 text-lg text-teal-900">
            You are authorized.
          </p>
          <p className=" text-center mt-2">
            click this button to upload an image
          </p>
          <div className="w-full flex justify-center mt-8">
          <Link href='/admin/imageUpload' className="px-5 py-2 text-lg bg-teal-900 rounded-full text-white mx-auto w-fit">
            Upload
          </Link>
          </div>
        </>
      ):(
        <Login/>
      )}
    </div>
  );
};

export default Admin;
