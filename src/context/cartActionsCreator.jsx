import { cartReducerActions } from "../utils/const";

export const addToCartActionCreator = (product) => {
	return {
		type: cartReducerActions.ADD_TO_CART,
		payload: product,
	};
};

export const removeFromCartActionCreator = (product) => {
	return {
		type: cartReducerActions.REMOVE_FROM_CART,
		payload: product,
	};
};

export const clearCartActionCreator = () => {
	return {
		type: cartReducerActions.CLEAR_CART,
	};
};
