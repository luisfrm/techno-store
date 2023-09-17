import { createContext, useState, useReducer } from "react";
import { products as InitialProducts } from "../mocks/products.json";
import filtersReducer from "../reducer/filtersReducer";
import { updateFiltersActionCreator } from "./filterActionsCreator";

// Create Context
export const FiltersContext = createContext();

const INITIAL_FILTERS_STATE = {
	category: "all",
	minPrice: 0,
	maxPrice: 1000,
};

// Create Provider
const FiltersProvider = ({ children }) => {
	const [products] = useState(InitialProducts);
	const [state, dispatch] = useReducer(filtersReducer, INITIAL_FILTERS_STATE);

	const updateFilters = (field, value) => {
		dispatch(updateFiltersActionCreator(field, value))
	}

	return (
		<FiltersContext.Provider value={{
			filters: state,
			updateFilters,
			products
		}}>
			{children}
		</FiltersContext.Provider>
	);
};

export default FiltersProvider;
