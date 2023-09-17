import { FiltersContext } from "../context/FiltersContext";
import { useMemo,  useContext } from "react";

const useFilters = () => {
	const { filters, products, updateFilters } = useContext(FiltersContext);

	const categories = [
		{
			text: "All",
			value: "all"
		},
		{
			text: "Laptops",
			value: "laptops"
		},
		{
			text: "Smartphones",
			value: "smartphones"
		}
	]

	const filterProducts = (products) => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === "all" || product.category === filters.category.toLowerCase())
			);
		});
	};

	const filteredProducts = useMemo(() => {
		return filterProducts(products);
	}, [products, filters]);

	return { updateFilters, filteredProducts, filters, categories };
};

export default useFilters;
