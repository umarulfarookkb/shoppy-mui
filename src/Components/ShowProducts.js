import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


function ShowProducts({data}) {

  const [filter, setFilter] = useState(data?.data)

    const filterProduct = (cat) => {
        const updatedList = data?.data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const navigate = useNavigate();
    const addToCart = useStore((state) => state.addToCart);

  return (
    <>
        <Box textAlign="center" sx={{ display: { xs: "block" } }}>
          <Button
            style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
            variant="outlined"
            onClick={() => setFilter(data?.data)}
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
                    m: 7,
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
  )
}

export default ShowProducts