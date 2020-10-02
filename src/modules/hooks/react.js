import React, { createContext, useContext } from "react"

import api from 'modules/api'
import { usePost } from './post'

const ReactContext = createContext({})

const ReactProvider = ({ children }) => {
  const { reloadPost } = usePost()

  const react = async (flood, type) => {
    try {
      await api.post(`react`, { flood, type }) 
      await reloadPost(flood)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ReactContext.Provider value={{
      react,
    }}>
      {children}
    </ReactContext.Provider>
  )
}

function useReact() {
  const context = useContext(ReactContext)

  if (!context) {
    throw new Error("React must be used within a ReactProvider")
  }

  return context
}

export { useReact, ReactProvider }
