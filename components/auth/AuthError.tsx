import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const AuthError: React.FC = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      headerLabel="Auth Error"
    >
      <div className="w-full flex flex-col space-y-2 justify-center items-center text-destructive">
        <ExclamationTriangleIcon className="w-10 h-10" />
        <p className="font-semibold">Oppss.., Something Went Wrong</p>
      </div>
    </CardWrapper>
  );
};

export default AuthError;
