import "./Products.css";
import { AddToCartIcon } from "../Icons";
import useCart from "../../hooks/useCart";

export function Products({ products }) {
	const { addToCart } = useCart();

	return (
		<main className="products">
			<ul>
				{products.slice(0, 10).map((product) => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} />
						<div>
							<strong>{product.title}</strong>
							<span> - ${product.price}</span>
						</div>
						<div className="buttons-product">
							<button
							style={{ backgroundColor: "#09f" }}
								onClick={() => {
									addToCart(product);
								}}
							>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
