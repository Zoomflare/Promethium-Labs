import { createContext, useContext, useState, useMemo } from "react";

const CursorContext = createContext(null);

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");

  const value = useMemo(
    () => ({
      cursorType,
      setCursorType,
    }),
    [cursorType]
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export const useCursor = () => {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return ctx;
};

