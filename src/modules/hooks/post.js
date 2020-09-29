import React, { createContext, useContext, useState, useEffect } from "react"

import api from 'modules/api'

const PostContext = createContext({})

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [mainLoading, setMainLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const getPosts = async () => {
    try {
      const response = await api.get(`list?page=${page}`)
      if (!response || !response.data || response.data.length < 1) return setHasMore(false)

      if (response.data.length < 10) setHasMore(false)

      setPosts([...posts, ...response.data])

    } catch (error) {
      console.log(error)

    }
  }

  const addPage = () => setPage(page + 1)

  const search = async (text) => {
    try {
      await sleep(1000)
      const response = await api.get(`list?search=${text}`)
      if (!response || !response.data || response.data.length < 1) return []

      return response.data
      
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const post = async (data) => {
    try {
      await sleep(1000)
      const response = await api.post(`post`, data)
      
      if (!response || !response.data || !response.data.id) return
      
      setPosts([response.data, ...posts])

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const request = async () => {
      setMainLoading(true)
      await getPosts()
      await sleep(1000)
      setMainLoading(false)
    }
    
    request()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const request = async () => {
      setIsLoading(true)
      await getPosts(page)
      setIsLoading(false)
    }
    
    request()
    // eslint-disable-next-line
  }, [page])

  return (
    <PostContext.Provider value={{
      posts,
      mainLoading,
      hasMore,
      isLoading,
      addPage,
      search,
      post,
    }}>
      {children}
    </PostContext.Provider>
  )
}

function usePost() {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error("Post must be used within a PostProvider")
  }

  return context
}

export { usePost, PostProvider }
