import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppState {
  // add shared state here
}

interface AppContextValue extends AppState {
  // add setters here
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  // add useState hooks here as needed

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
