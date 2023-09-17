import useCart from "../../hooks/useCart";

export default function CartItem({ product }) {
	const { addToCart, removeFromCart } = useCart();
	return (
		<>
			<img src={product.thumbnail} alt={product.title} />
			<div>
				<strong>{product.title}</strong> - $${product.price}
			</div>
			<footer>
				<small>Qty: ${product.quantity}</small>
				<button
					style={{ backgroundColor: "#09f" }}
					onClick={() => {
						addToCart(product);
					}}
				>
					+
				</button>
				<button
					style={{ backgroundColor: "red" }}
					onClick={() => {
						removeFromCart(product);
					}}
				>
					-
				</button>
			</footer>
		</>
	);
}
