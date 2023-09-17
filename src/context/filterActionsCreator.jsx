import { filterReducerActions } from "../utils/const";

export const updateFiltersActionCreator = (filter, value) => {
	return {
		type: filterReducerActions.UPDATE_FILTERS,
		payload: {
			filter,
			value,
		},
	};
};
