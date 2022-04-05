import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import useStore from "../store/store";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let comMount = true;

  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (comMount) {
          setLoading(false);
          setData(res.data);
          setFilter(res.data);
          console.log(filter);
        }

        return () => {
          comMount = false;
        };
      })
      .catch((err) => console.log(err));
  }, []);

  const Loading = () => {
    return (
      <>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 290px)",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              m: 3,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={280} height={350} />
          </Box>

          <Box
            sx={{
              m: 3,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={280} height={350} />
          </Box>

          <Box
            sx={{
              m: 3,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={280} height={350} />
          </Box>

          <Box
            sx={{
              m: 3,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Skeleton variant="rectangular" width={280} height={350} />
          </Box>

          {/* sx={{ pt: 0.5 , display:'block', marginRight: 0.5, my: 5}} */}
        </Grid>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <Box textAlign="center" sx={{ display: { xs: "block" } }}>
          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => setFilter(data)}
            sx={{m: 1}}
          >
            All
          </Button>

          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => filterProduct("men's clothing")}
            sx={{m: 1}}
          >
            Men's Clothing
          </Button>

          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => filterProduct("women's clothing")}
            sx={{m: 1}}
          >
            Women's Clothing
          </Button>

          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => filterProduct("jewelery")}
            sx={{m: 1}}
          >
            Jewelery
          </Button>

          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => filterProduct("electronics")}
            sx={{m: 1}}
          >
            Electronic
          </Button>
        </Box>
        {filter.map((item) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  gridTemplateColumns: "repeat(auto-fit, 290px)",
                  justifyContent: "center",
                  float: { md: 'left', xs: 'none' }
                }}
              >
                <Card
                  key={item.id}
                  sx={{
                    width: 250,
                    height: 370,
                    m: 5,
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    alignContent: "center",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      navigate(`/product/${item.id}`)
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200px"
                      image={item.image}
                      alt={item.title}
                      style={{ objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                        <b> {item.title}</b>
                      </Typography>
                      <Typography>{item.price}$</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    size="small"
                    style={{ justifyContent: "left" }}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      alignContent: "center",
                    }}
                  >
                    <Button
                      sx={{ mt: "auto" }}
                      style={{ backgroundColor: "#2E3B55" }}
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addToCart(item.id)}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Box textAlign="center" sx={{ display: { xs: "block" } }}>
        <Typography gutterBottom variant="h3" component="div">
          Latest Products
        </Typography>
      </Box>
      <hr />
      <Box textAlign="center">{loading ? <Loading /> : <ShowProducts />}</Box>
    </>
  );
};

export default Products;
