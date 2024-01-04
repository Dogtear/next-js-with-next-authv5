import { RegisterForm } from "@/components/auth/RegisterForm ";
import React from "react";

interface RegisterPageProps {
  children: React.ReactNode;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ children }) => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
