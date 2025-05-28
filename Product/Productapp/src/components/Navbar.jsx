import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h4'>ProductApp</Typography>&nbsp; &nbsp;
            <Link to="/add">
            <Button variant='contained' color='success'>Add</Button>
            </Link> &nbsp; &nbsp;
   
            <Link to="/">
            <Button variant='contained' color='info'>View</Button>
            </Link> &nbsp;&nbsp;

             <Link to="/login">
            <Button variant='contained' color='warning'>Login</Button>
            </Link> &nbsp; &nbsp;

             <Link to="/signup">
            <Button variant='contained' color='secondary'>SignUP</Button>
            </Link> &nbsp; &nbsp;
        </Toolbar>
      </AppBar><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
