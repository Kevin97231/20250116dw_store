import { useSelector } from "react-redux";

export const Cart = () => {
  const products = useSelector((state) => state.cart.value);

  return (
    <>
      <h1>Mon panier</h1>

      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </>
  );
};
