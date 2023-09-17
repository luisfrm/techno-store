import { CartIcon, ClearCartIcon } from "../Icons";
import { useId } from "react";
import "./Cart.css";
import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";

export default function Cart() {
	const carCheckboxId = useId();
	const { cart, clearCart } = useCart();
	return (
		<>
			<label htmlFor={carCheckboxId} className="cart-button">
				<CartIcon />
			</label>
			<input type="checkbox" name={carCheckboxId} id={carCheckboxId} hidden />
			<aside className="cart">
				<div>
					<ul>
						{cart.length > 0 &&
							cart.map((product) => (
								<li key={product.id}>
									<CartItem product={product} />
								</li>
							))}
					</ul>
					{cart.length === 0 && <p>Sorry, still no products on cart</p>}
					<button onClick={clearCart}>
						<ClearCartIcon />
					</button>
				</div>
			</aside>
		</>
	);
}
