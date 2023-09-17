import useFilters from "../../hooks/useFilters";
import "./Filters.css";

export default function Filters() {

	const { filters, updateFilters, categories } = useFilters()

  const handleChange = ({target}) => {
    const {id, value} = target;

    updateFilters(id, value)
  }

	return (
		<section className="filters">
			<div className="price-filter">
				<label htmlFor="minPrice">Price</label>
				<div>
					<div className="price-labels">
						<span>${filters.minPrice}</span>
						<span>${filters.maxPrice}</span>
					</div>
					<input
						type="range"
						id="minPrice"
						min={0}
						max={filters.maxPrice}
						defaultValue={0}
            onChange={handleChange}
					/>
				</div>
			</div>
			{categories.length > 0 && (
				<div>
					<label htmlFor="category">Category</label>
					<select id="category" onChange={handleChange}>
						{categories.map((cat) => {
							return <option key={cat.value} value={cat.value}>{cat.text}</option>;
						})}
					</select>
				</div>
			)}
		</section>
	);
}
