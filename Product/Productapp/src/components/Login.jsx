import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const Login = () => {
  return (
    <div>
      <Typography variant='h4'>Login</Typography>
      <TextField variant='outlined' label="Email"/><br /><br />
      <TextField variant='outlined' label="Passwod"/><br /><br />
      <Button variant='contained'>Login</Button>
    </div>
  )
}

export default Login
