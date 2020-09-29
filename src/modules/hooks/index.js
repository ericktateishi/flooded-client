import React from "react"
import { DrawerProvider } from "./drawer"
import { PostProvider } from "./post"
import { UserProvider } from './user'

export default function AppProvider({ children }) {
  return (
    <DrawerProvider>
      <PostProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </PostProvider>
    </DrawerProvider>
  )
}
