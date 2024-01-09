"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { useSession } from "next-auth/react";

const SettingPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(user)}

      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SettingPage;
