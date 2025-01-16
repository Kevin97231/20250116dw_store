import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../Hooks/useAxios";

export const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  const { get } = useAxios();

  useEffect(() => {
    get(`/${productId}`).then((resp) => setProduct(resp));
  }, []);

  return (
    <>
      <h1>Détail</h1>
      <h2>Détail du produit</h2>
      <p>name: {product.title}</p>
      <p>id: {product.id}</p>
    </>
  );
};
