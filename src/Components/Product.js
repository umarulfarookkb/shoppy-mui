import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import useStore from "../store/store";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const addToCart = useStore((state) => state.addToCart);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Loading = () => {
    return (
      <>
        <Box
          sx={{
            
            p: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            
            variant="rectangular"
            width={500}
            height={300}
          />
        </Box>
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={1500}
          height={30}
        />
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={900}
          height={30}
        />
        <Skeleton
          sx={{
            m: 3,
          }}
          variant="rectangular"
          width={100}
          height={30}
        />
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <CardContent>
          <CardMedia
            component="img"
            height="300px"
            width="500px"
            image={product.image}
            alt={product.title}
            style={{ objectFit: "contain" }}
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product.category}
          </Typography>
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product.price}$
          </Typography>
          <Typography variant="body2">{product.description}</Typography>
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
    );
  };
  return (
    <>
      <Box textAlign="center">{loading ? <Loading /> : <ShowProduct />}</Box>
    </>
  );
};

export default Product;
