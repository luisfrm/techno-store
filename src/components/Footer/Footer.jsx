import "./Footer.css";
import useCart from "../../hooks/useCart";
import useFilters from "../../hooks/useFilters";

export function Footer() {
	const { filters } = useFilters();
	const { cart } = useCart();
	return (
		<footer className="footer">
			<span>{JSON.stringify(cart)}</span>
		</footer>
	);
}
