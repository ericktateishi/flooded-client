import React, { useRef } from 'react'

import TextField from '@material-ui/core/TextField'
import { Form, Subtitle } from '../styled'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

const Signup = ({ setPage, setOpenLogin }) => {
  const signupForm = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = signupForm.current
    console.log(form["email"].value)
    console.log(form["name"].value)
    console.log(form["password"].value)
    setOpenLogin(false)
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
        <Link
          component="button"
          onClick={() => {
            setPage('login')
          }}
          type="button"
        >
          Em vez disso, faça login!
        </Link>
        <Button type="submit" variant="contained" color="primary">
          Entrar
        </Button>
      </Form>
    </>
  )
}

export default Signup