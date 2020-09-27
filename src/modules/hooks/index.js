import React from "react"
import { DrawerProvider } from "./drawer"

export default function AppProvider({ children }) {
  return (
    <DrawerProvider>
      {children}
    </DrawerProvider>
  )
}
