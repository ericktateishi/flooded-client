import React, { createContext, useContext, useState } from "react"

const DrawerContext = createContext({})

const DrawerProvider = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false)
  const [openPost, setOpenPost] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <DrawerContext.Provider value={{
      openSearch,
      setOpenSearch,
      openPost,
      setOpenPost,
      openLogin,
      setOpenLogin,
    }}>
      {children}
    </DrawerContext.Provider>
  )
}

function useDrawer() {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error("Drawer must be used within a DrawerProvider")
  }

  return context
}

export { useDrawer, DrawerProvider }
