import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <Typography variant='h4'>Add Product</Typography>
      <TextField variant='outlined' label="product name"/><br /><br />
      <TextField variant='outlined' label="price"/><br /><br />
      <TextField variant='outlined' label="description"/><br /><br />
      <TextField variant='outlined' label="image"/><br /><br />
      <Button variant='contained'>add</Button>
    </div>
  )
}

export default Add
