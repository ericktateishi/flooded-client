import React, { useRef, useState } from 'react'

import { useUser } from 'modules/hooks/user'

import TextField from '@material-ui/core/TextField'
import { Form, Subtitle, Error } from '../styled'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Loading from 'app/components/Loading'

const Login = ({ setPage, setOpenLogin }) => {
  const loginForm = useRef(null)
  const { login } = useUser()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const form = loginForm.current

    try {
      setLoading(true)
      await login({
        email: form["email"].value,
        password: form["password"].value 
      })
      setOpenLogin(false)

    } catch (error) {
      if (!error || !error.response || !error.response.status) return setError("Erro ao fazer login, tente mais tarde")

      const code = error.response.status

      if (code === 401) return setError("Usuário incorreto")
      if (code === 404) return setError("Usuário não encontrado, tente fazer um cadastro")

      return setError("Erro ao fazer login, tente mais tarde")

    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Subtitle>
        Faça login para informar novos locais com alagamentos e validar a veracidade de outros informes
      </Subtitle>
      <Form ref={loginForm} onSubmit={handleSubmit} autoComplete="off">
        <TextField required label="E-mail" name="email" type="email"/>
        <TextField required label="Senha" name="password" type="password"/>
        <Error>{error}</Error>
        <Link
          component="button"
          onClick={() => {
            setPage('signup')
          }}
          type="button"
        >
          Em vez disso, cadastre-se!
        </Link>
        {loading ? 
          <Loading />
        :
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        }
        
      </Form>
    </>
  )
}

export default Login