import { filterReducerActions } from "../utils/const";

const filtersReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case filterReducerActions.UPDATE_FILTERS: {
			const { filter, value } = payload;
			let newFilters = { ...state };
			newFilters[filter] = value;
			return newFilters;
		}
	}

  return state;
};

export default filtersReducer;
