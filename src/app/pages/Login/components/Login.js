import React, { useRef } from 'react'

import TextField from '@material-ui/core/TextField'
import { Form, Subtitle } from '../styled'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

const Login = ({ setPage, setOpenLogin }) => {
  const loginForm = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = loginForm.current
    console.log(form["email"].value)
    console.log(form["password"].value)
    setOpenLogin(false)
  }

  return (
    <>
      <Subtitle>
        Faça login para informar novos locais com alagamentos e validar a veracidade de outros informes
      </Subtitle>
      <Form ref={loginForm} onSubmit={handleSubmit} autoComplete="off">
        <TextField required label="E-mail" name="email" type="email"/>
        <TextField required label="Senha" name="password" type="password"/>
        <Link
          component="button"
          onClick={() => {
            setPage('signup')
          }}
          type="button"
        >
          Em vez disso, cadastre-se!
        </Link>
        <Button type="submit" variant="contained" color="primary">
          Entrar
        </Button>
      </Form>
    </>
  )
}

export default Login