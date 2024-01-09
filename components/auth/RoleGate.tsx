"use client";
import React from "react";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "../FormError";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate: React.FC<RoleGateProps> = ({ allowedRole, children }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="You do not have permission to view." />;
  }

  return <>{children}</>;
};

export default RoleGate;
