import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from '@mui/icons-material/Star';

function ShowProduct({id,image,title,category,price,description,rating}) {
    const navigate = useNavigate();
    const addToCart = useStore((state) => state.addToCart);

  return (
    <>
        <CardContent>
          <CardMedia
            component="img"
            height="300px"
            width="500px"
            image={image}
            alt={title}
            style={{ objectFit: "contain" }}
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {category}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {price}$
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Rating {rating}<StarIcon fontSize="small"/>
          </Typography>
          <Typography variant="body2">{description}</Typography>
          
        </CardContent>

        <Box textAlign="center" sx={{ display: { xs: "block" } }}>
          <Button
            style={{ backgroundColor: "#2E3B55" }}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCart(id)}
            sx={{ m: 3 }}
          >
            Add To Cart
          </Button>

          <Button
            style={{ backgroundColor: "#2E3B55" }}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Go To Cart
          </Button>
        </Box>
      </>
  )
}

export default ShowProduct