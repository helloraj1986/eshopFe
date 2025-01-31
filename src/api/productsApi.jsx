import axios from "axios";

export const fetchOneProduct = async (id) => {
	try {
		const response = await axios.get(`http://localhost:8080/api/products/${id}`);
		const result = response.data;
		return result;
	} catch (error) {
		console.error("Error fetching products:", error);
		return null;
	}
};

export const fetchProducts = async () => {
	try {
		const response = await axios.get("http://localhost:8080/api/products");
		const result = response.data;
		return result;
	} catch (error) {
		console.error("Error fetching products:", error);
		return [];
	}
};

//delete one product
export const deleteProduct = async (id) => {
	try {
		const response = await axios.delete(
			`http://localhost:8080/api/products/${id}`
		);
		if (response.status === 200) {
			console.log("Product deleted successfully");
			return true;
		}
	} catch (error) {
		console.error("Error deleting product:", error);
		return null;
	}
};

//add a product
export const addProduct = async (product) => {
	try {
		const response = await axios.post(
			"http://localhost:8080/api/products",
			product
		);
		const result = response.data;
		return result;
	} catch (error) {
		console.error("Error adding product:", error);
		return null;
	}
};

//how to delete a product using put method
