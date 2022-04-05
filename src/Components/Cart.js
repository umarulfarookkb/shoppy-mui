import React from "react";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

function Cart() {
  const navigate = useNavigate();

  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const checkOut = useStore((state) => state.checkOut);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cart.map((item) =>
      setTotal((prev) => prev + item.product.price * item.quantity)
    );
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <TableContainer align="center">
          <Table
            sx={{ flexGrow: 1, width: { xs: 500, md: 1000 } }}
            aria-label="spanning table"
            component={Paper}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  Your Cart
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product images</TableCell>
                <TableCell>List of Products</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => {
                const { product, itemId, quantity } = item;
                return (
                  <TableRow key={itemId}>
                    <TableCell button>
                      <ListItemAvatar>
                        <img
                          src={product.image}
                          alt={product.title}
                          width="70px"
                          style={{ objectFit: "contain" }}
                        />
                      </ListItemAvatar>
                      <ListItemText />
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton
                          size="medium"
                          onClick={() => {
                            decreaseQuantity(itemId);
                          }}
                        >
                          <ArrowCircleDownRoundedIcon fontSize="inherit" />
                        </IconButton>
                        <span>{quantity}</span>
                        <IconButton
                          size="medium"
                          onClick={() => {
                            addToCart(itemId);
                          }}
                        >
                          <ArrowCircleUpRoundedIcon fontSize="inherit" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                    {/* <TableCell align="center">$</TableCell> */}
                    <TableCell align="center">
                      {product.price * quantity} $
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" color="error">
                        <DeleteIcon onClick={() => removeFromCart(itemId)} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  Total
                </TableCell>
                <TableCell align="left">{total.toFixed(2)} $</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="left">
                  <Button
                    onClick={() => clearCart()}
                    variant="outlined"
                    color="error"
                  >
                    Clear All
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
                    onClick={() => {
                      checkOut();
                    }}
                  >
                    Checkout
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    style={{ color: "#2E3B55", borderColor: "#2E3B55" }}
                    onClick={() => {
                      navigate("/products");
                    }}
                  >
                    <BackspaceIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CardContent>
          <CardMedia
            component="img"
            height="300px"
            width="500px"
            image="empty-cart.png"
            alt="Empty Cart"
            style={{ objectFit: "contain" }}
          />
          <hr/>
          <Box textAlign="center" sx={{ display: { xs: "block" } }}>
          <Button
            variant="outlined"
            style={{ color: "white", borderColor: "white" ,backgroundColor: "#2E3B55"}}
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping?
          </Button>
          </Box>
        </CardContent>
      )}
    </>
  );
}

export default Cart;
