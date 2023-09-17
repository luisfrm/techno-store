/* eslint-disable react-hooks/exhaustive-deps */
import useFilters from "./hooks/useFilters";
import { Products } from "./components/Products/Products";
import Header from "./components/Header/Header";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";

function App() {
	const { filteredProducts } = useFilters();

	return (
		<CartProvider>
			<Header
				title="Shopping cart"
			/>
			<Cart/>
			<Products products={filteredProducts} />
			{/* <Footer /> */}
		</CartProvider>
	);
}

export default App;
