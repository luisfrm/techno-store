import { cartReducerActions } from "../utils/const";

const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case cartReducerActions.ADD_TO_CART: {
			// Check if product is already on cart
			const productInCartIndex = state.findIndex(
				(item) => item.id === payload.id
			);
			if (productInCartIndex > -1) {
				const newState = structuredClone(state);
				newState[productInCartIndex].quantity += 1;
				localStorage.setItem("cart", JSON.stringify(newState));
				return newState;
			}
			const newState = [...state, { ...payload, quantity: 1 }]
			localStorage.setItem("cart", JSON.stringify(newState));
			return newState;
		}

		case cartReducerActions.REMOVE_FROM_CART: {
			const newState = state.filter((item) => item.id !== payload.id);
			localStorage.setItem("cart", JSON.stringify(newState));
			return newState;
		}

		case cartReducerActions.CLEAR_CART:
			localStorage.setItem("cart", JSON.stringify([]));
			return [];
	}

	return state;
};

export default cartReducer;