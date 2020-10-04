import React, { createContext, useContext, useState, useEffect } from "react"

import api from 'modules/api'
import jwt from 'jsonwebtoken'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const setToken = (token) => {
    const decode = jwt.decode(token)

    if (!decode || !decode.user || !decode.user.id) throw new Error()

    setUser(decode.user)
    localStorage.setItem('u:token', token)
  }
  
  const login = async (data) => {
    const response = await api.post('login', data)

    if (
      !response || !response.headers || !response.headers['auth-user-token']
    ) throw new Error()

    setToken(response.headers['auth-user-token'])
  }

  const signup = async (data) => {
    const response = await api.post('signup', data)
    
    if (
      !response || !response.headers || !response.headers['auth-user-token']
    ) throw new Error()

    setToken(response.headers['auth-user-token'])
  }

  const logout = async () => {
    localStorage.removeItem('u:token')
    setUser(null)
  }

  useEffect(() => {
    const storageToken = localStorage.getItem('u:token')

    if (!storageToken) return

    try {
      setToken(storageToken)

    } catch (error) {
      console.log(error)
    }    
    // eslint-disable-next-line
  }, [])

  return (
    <UserContext.Provider value={{
      login,
      signup,
      logout,
      user,
    }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("User must be used within a UserProvider")
  }

  return context
}

export { useUser, UserProvider }
