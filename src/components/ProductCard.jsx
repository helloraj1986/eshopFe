import React from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Typography,
	Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../api/productsApi";
import { useProductsContext } from "../Context/ProductsContext";

const ProductCard = ({ product, handleDeleteProduct }) => {
	const navigate = useNavigate();

	// Add the addToCart function to the ProductCard component
	const addToCart = (product) => {
		console.log("Product added to cart: ", product);
	};

	const handleProductClick = (id) => {
		navigate(`/product/${id}`); // Navigate to product details page
	};
	return (
		<Grid item xs={12} sm={6} md={6} lg={6} key={product.id}>
			<Card>
				<CardHeader
					title={product.name}
					subheader={product.category}
					onClick={() => handleProductClick(product.id)}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{product.description}
					</Typography>
					<Typography variant="h6">${product.price.toFixed(2)}</Typography>
					<Typography variant="body2">
						Release Date: {product.release_date}
					</Typography>
					<Typography variant="body2">Quantity: {product.quantity}</Typography>
					<Grid>
						<Button
							variant="contained"
							color="secondary"
							size="small"
							sx={{ mr: 1 }}
							onClick={() => handleDeleteProduct(product.id)}>
							Delete
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => addToCart(product)}
							size="small">
							Add to Cart
						</Button>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default ProductCard;
