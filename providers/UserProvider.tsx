"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface Props {
  children: React.ReactNode;
}

export default function UserProvider({ children }: Props) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
