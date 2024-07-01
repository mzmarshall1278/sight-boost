'use client';

import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface ProviderProps {
  children: ReactNode;
  session: Session | null;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
);

export default Provider;
