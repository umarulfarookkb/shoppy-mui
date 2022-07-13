import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Products from './Products';

export default function Home() {
  return (
    <>
    <Card sx={{ maxWidth: 1500 ,maxHeight:400}} sm={{ maxWidth: 500,maxHeight:150 }}>
        <CardMedia
          component="img"
          image="banner.jpg"
          alt="shoppy"
        />
    </Card>
    <br/>
    <Products/>
    </>
  );
}
