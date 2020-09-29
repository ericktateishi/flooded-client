import React, { useRef, useState } from 'react'

import { useUser } from 'modules/hooks/user'

import TextField from '@material-ui/core/TextField'
import { Form, Subtitle, Error } from '../styled'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Loading from 'app/components/Loading'

const Signup = ({ setPage, setOpenLogin }) => {
  const signupForm = useRef(null)
  const { signup } = useUser()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const form = signupForm.current

    try {
      setLoading(true)
      await signup({
        email: form["email"].value,
        password: form["password"].value,
        name: form["name"].value
      })
      setOpenLogin(false)

    } catch (error) {
      if (!error || !error.response || !error.response.status) return setError("Erro ao fazer cadastro, tente mais tarde")

      const code = error.response.status

      if (code === 406) return setError("Usuário já cadastrado")

      return setError("Erro ao fazer login, tente mais tarde")

    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Subtitle>
        Faça cadastro para informar novos locais com alagamentos e validar a veracidade de outros informes
      </Subtitle>
      <Form ref={signupForm} onSubmit={handleSubmit} autoComplete="off">
        <TextField required label="E-mail" name="email" type="email"/>
        <TextField required label="Nome completo" name="name" type="text"/>
        <TextField required label="Senha" name="password" type="password"/>
        <Error>
          {error}
        </Error>
        <Link
          component="button"
          onClick={() => {
            setPage('login')
          }}
          type="button"
        >
          Em vez disso, faça login!
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

export default Signup