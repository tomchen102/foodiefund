"use client";
import { createContext, useContext, useState, useEffect } from "react";
import LocalStorageService from "@/utils/LocalStorageService";
import { ProviderProps } from "@/types/ProviderType";

const localStorageService = LocalStorageService.getInstance();

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorageService.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSetToken = (newToken: string | null) => {
    if (newToken) {
      localStorageService.setItem("jwtToken", newToken);
    } else {
      localStorageService.removeItem("jwtToken");
    }
    setToken(newToken);
  };

  const getToken = () => {
    return token;
  };

  return <AuthContext.Provider value={{ token, setToken: handleSetToken, getToken }}>{children}</AuthContext.Provider>;
};
