import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

interface LoginPageProps {
  children: React.ReactNode;
}

const LoginPage: React.FC<LoginPageProps> = ({ children }) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
