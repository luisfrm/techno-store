import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
	const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext);

	return { cart, addToCart, clearCart, removeFromCart };
}
