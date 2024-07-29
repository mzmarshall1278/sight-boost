"use client";

import React from "react";
import Login from "../components/Admin/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Form from "../components/Admin/Form";

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
          <Form />
        </>
      ):(
        <Login/>
      )}
    </div>
  );
};

export default Admin;
