import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useEffect } from 'react';

const View = () => {
  var[product,setproduct]=useState([])
  // useEffect(()=>{},[]) syntax
  useEffect(()=>{
  axios.get("http://localhost:3004/view")
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  }
)
},[])

//delete function 
const deleteProduct=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3004/delete/"+id)
  .then((res)=>{
    console.log(res.data.message)
    alert(res.data.message)
    window.location.reload()
  })
}



  return (
    <div>
      <Grid container spacing={2}>
        {product.map((val)=>{
          return(
<Grid item xs={12} md={4} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={val.Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {val.Pname}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {val.Desc}
          </Typography>
          <Typography variant="body6" sx={{ color: 'text.primary' }}>
              {val.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' color='error' onClick={()=>{deleteProduct(val._id)}}>Delete</Button>
        <Button size="small" variant='contained' color='success' >Update</Button>
      </CardActions>
      
    </Card>
    </Grid>
 )
   })}
</Grid>

    </div>
   
  )
}

export default View

