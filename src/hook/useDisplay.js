"use client";
import { DisplayContext } from "@/context/DisplayContext";
import { useContext } from "react";

const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw Error("must be data context provider");
  }
  return context;
};

export default useDisplay;
