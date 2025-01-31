import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => () => {
		setDrawerOpen(open);
	};

	const menuItems = [
		{ text: "Home", path: "/" },
		{ text: "Products", path: "/products" },
		{ text: "Add Product", path: "/add-product" },
	];

	return (
		<>
			<AppBar position="static" color="primary">
				<Toolbar>
					{/* Mobile Menu Button */}
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
						sx={{ display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>

					{/* Logo / Brand */}
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						MyStore
					</Typography>

					{/* Desktop Navigation */}
					<div className="hidden sm:flex space-x-4">
						{menuItems.map((item) => (
							<Button key={item.text} color="inherit" component={Link} to={item.path}>
								{item.text}
							</Button>
						))}
					</div>
				</Toolbar>
			</AppBar>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				<List sx={{ width: 250 }}>
					{menuItems.map((item) => (
						<ListItem
							button
							key={item.text}
							component={Link}
							to={item.path}
							onClick={toggleDrawer(false)}>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default NavBar;
