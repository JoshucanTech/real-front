"use client";

import { useState } from "react";

type User = {
  email:string
} | null;

export const useAuth = () => {
  const [user, setUser] = useState<User>(null);

  const login = (email: string, password: string) => {
    // Mock authentication logic
    if (email === "test@example.com" && password === "password") {
      setUser({ email });
    }
  };

  const logout = () => setUser(null);

  return { user, login, logout };
};
