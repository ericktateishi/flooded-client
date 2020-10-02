import React from "react"
import { DrawerProvider } from "./drawer"
import { PostProvider } from "./post"
import { UserProvider } from './user'
import { ReactProvider } from './react'

export default function AppProvider({ children }) {
  return (
    <DrawerProvider>
      <PostProvider>
        <UserProvider>
          <ReactProvider>
            {children}
          </ReactProvider>
        </UserProvider>
      </PostProvider>
    </DrawerProvider>
  )
}
