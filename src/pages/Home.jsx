import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import image from "../assets/shop-bg.jpg";
import { useNavigate } from "react-router-dom";

const Background = styled(Box)({
	backgroundImage: `url(${image})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	color: "#fff",
	textAlign: "center",
	padding: "20px",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for readability
		zIndex: 1,
	},
	"& > *": {
		position: "relative",
		zIndex: 2,
	},
});

const categories = ["Mobile", "Car", "Laptop", "Furniture", "Clothing"];

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			{/* Hero Section */}
			<Background>
				<Container>
					<Typography variant="h2" fontWeight="bold" gutterBottom>
						Welcome to MyShop
					</Typography>
					<Typography variant="h6" paragraph>
						Discover the best deals on Mobile, Cars, Laptops, and more!
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={() => navigate("/products")}>
						Shop Now
					</Button>
				</Container>
			</Background>

			{/* Product Categories */}
			<Container sx={{ py: 6 }}>
				<Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
					Explore Our Categories
				</Typography>
				<Grid container spacing={3} justifyContent="center">
					{categories.map((category) => (
						<Grid item key={category} xs={12} sm={6} md={3}>
							<Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
								<Typography variant="h6">{category}</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>

			{/* About Section */}
			<Box sx={{ bgcolor: "grey.100", py: 6, textAlign: "center" }}>
				<Container>
					<Typography variant="h4" fontWeight="bold" gutterBottom>
						About Us
					</Typography>
					<Typography variant="body1" maxWidth="md" mx="auto">
						At MyShop, we bring you top-quality products at unbeatable prices. Shop
						with confidence and experience world-class service.
					</Typography>
				</Container>
			</Box>

			{/* Footer */}
			<Box
				sx={{ bgcolor: "grey.900", color: "white", py: 3, textAlign: "center" }}>
				<Typography variant="body2">
					&copy; {new Date().getFullYear()} MyShop. All rights reserved.
				</Typography>
			</Box>
		</>
	);
};

export default Home;
