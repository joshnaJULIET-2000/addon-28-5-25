import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const SignUp = () => {
  return (
    <div>
       <Typography variant='h4'>SignUp</Typography>
       <TextField variant='outlined' label="Name"/><br /><br />
       <TextField variant='outlined' label="Email"/><br /><br />
       <TextField variant='outlined' label="Passwod"/><br /><br />
       <TextField variant='outlined' label="Phone"/><br /><br />
       <Button variant='contained'>SignUp</Button>
    </div>
  )
}

export default SignUp
