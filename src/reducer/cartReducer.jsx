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
				return newState;
			}

			return [...state, { ...payload, quantity: 1 }];
		}

		case cartReducerActions.REMOVE_FROM_CART: {
			return state.filter((item) => item.id !== payload.id);
		}

		case cartReducerActions.CLEAR_CART:
			return [];
	}

	return state;
};

export default cartReducer;