"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function SupabaseProvider({ children }: Props) {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>(),
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
