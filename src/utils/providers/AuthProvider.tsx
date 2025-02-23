"use client";
import Cookies from "js-cookie";
import React, { createContext, useState, useEffect, useContext } from "react";

import { ChildrenProps } from "@/types/ProviderType";

export interface User {
  name: string;
  photo: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  clearUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userCookie = Cookies.get("token");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const clearUser = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, setUser, clearUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
