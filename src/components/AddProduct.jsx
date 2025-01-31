import { useState } from "react";
import axios from "axios";
import {
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
	Grid,
	Card,
	CardContent,
	CardHeader,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
} from "@mui/material";
import moment from "moment";

const categoryOptions = ["Mobile", "Car", "Laptop", "Furniture", "Clothing"];

const AddProduct = ({ onProductAdded }) => {
	const [product, setProduct] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
		release_date: moment().format("YYYY-MM-DD"),
		available: false,
		quantity: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e) => {
		setProduct((prev) => ({ ...prev, available: e.target.checked }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/products", product);
			onProductAdded(response.data); // Notify the parent component (ProductList)
			setProduct({
				name: "",
				category: "",
				description: "",
				price: "",
				release_date: moment().format("YYYY-MM-DD"),
				available: false,
				quantity: "",
			});
		} catch (error) {
			console.error("Error adding product:", error);
		}
	};

	return (
		<Card className="container mx-auto p-4 mt-4">
			<CardHeader title="Add New Product" />
			<CardContent>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Product Name"
								name="name"
								value={product.name}
								onChange={handleChange}
								required
							/>
						</Grid>

						{/* Category Dropdown */}
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth required>
								<InputLabel>Category</InputLabel>
								<Select
									name="category"
									value={product.category}
									onChange={handleChange}>
									{categoryOptions.map((option) => (
										<MenuItem key={option} value={option}>
											{option}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>

						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Description"
								name="description"
								value={product.description}
								onChange={handleChange}
								required
								multiline
								rows={3}
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Price"
								type="number"
								name="price"
								value={product.price}
								onChange={handleChange}
								required
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Quantity"
								type="number"
								name="quantity"
								value={product.quantity}
								onChange={handleChange}
								required
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								type="date"
								label="Release Date"
								name="release_date"
								value={product.release_date}
								onChange={handleChange}
								InputLabelProps={{ shrink: true }}
								required
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<FormControlLabel
								control={
									<Checkbox
										checked={product.available}
										onChange={handleCheckboxChange}
									/>
								}
								label="Available"
							/>
						</Grid>

						<Grid item xs={12}>
							<Button type="submit" variant="contained" color="primary" fullWidth>
								Add Product
							</Button>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	);
};

export default AddProduct;
