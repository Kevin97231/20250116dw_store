import { Card } from "./Card";

/* eslint-disable react/prop-types */
export const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
