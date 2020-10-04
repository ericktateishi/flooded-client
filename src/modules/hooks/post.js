import React, { createContext, useContext, useState, useEffect } from "react"

import api from 'modules/api'

const PostContext = createContext({})

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [mainLoading, setMainLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

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

  const reloadPost = async (id) => {
    try {
      const response = await api.get(`flood/${id}`)
      if (!response || !response.data || !response.data.id) return
      
      const newPost = response.data
      let index = (posts || []).findIndex(p => p.id === newPost.id)

      if (index < 0) return
      let newPosts = [...posts]

      newPosts[index] = newPost
      setPosts(newPosts)

    } catch (error) {
      console.log(error)
    }
  }

  const addPage = () => setPage(page + 1)

  const search = async (text) => {
    try {
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
      reloadPost,
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
