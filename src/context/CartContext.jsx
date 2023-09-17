import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import {
	addToCartActionCreator,
	removeFromCartActionCreator,
	clearCartActionCreator,
} from "./cartActionsCreator";

// create context
export const CartContext = createContext();

const INITIAL_STATE = JSON.parse(localStorage.cart) ?? [];

// create provider
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

	const addToCart = (product) => {
		dispatch(addToCartActionCreator(product));
	};

	const removeFromCart = (product) => {
		dispatch(removeFromCartActionCreator(product));
	};

	const clearCart = () => {
		dispatch(clearCartActionCreator());
	};

	return (
		<CartContext.Provider
			value={{
				cart: state,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
