import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";
import { useProductsContext } from "../Context/ProductsContext";
import axios from "axios";

const fetchOneProduct = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/products/${id}`
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { productContextData, updateProductContextProps } =
    useProductsContext();

  useEffect(() => {
    let isMounted = true;

    const getOneProduct = async () => {
      const data = await fetchOneProduct(id);
      if (isMounted) {
        setProduct(data);
        updateProductContextProps({
          ...productContextData,
          selectedProduct: data,
        });
      }
    };
    getOneProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
      {/* Back Button */}
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 2,
        }}
      >
        {/* Product Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: 400 },
            height: "auto",
            borderRadius: 2,
          }}
          image={
            product.image || "https://source.unsplash.com/400x300/?product"
          }
          alt={product.name}
        />

        {/* Product Details */}
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.description}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Category:
              </Typography>
              <Typography variant="h6">{product.category}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Price:
              </Typography>
              <Typography variant="h6">${product.price.toFixed(2)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Release Date:
              </Typography>
              <Typography variant="h6">
                {moment(product.release_date).format("DD-MM-YY")}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Availability:
              </Typography>
              <Typography
                variant="h6"
                color={product.available ? "success.main" : "error.main"}
              >
                {product.available ? "In Stock" : "Out of Stock"}
              </Typography>
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary">
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
