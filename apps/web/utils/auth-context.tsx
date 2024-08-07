'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  userId: number;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        setIsLoggedIn(true);
        const decoded = jwt.decode(token) as { sub?: number };
        if (decoded.sub !== undefined) {
            setUserId(decoded.sub); // Set userId only if it's defined
          } else {
            throw new Error("Invalid token: userId not found");
          }
        }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
    const decoded = jwt.decode(token) as { sub?: number };
    if (decoded.sub !== undefined) {
        setUserId(decoded.sub);
      } else {
        throw new Error("Invalid token: userId not found");
      }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUserId(0);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
