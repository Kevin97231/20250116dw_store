import { useEffect, useState } from "react";
import { useAxios } from "../Hooks/useAxios";
import { ProductList } from "../components/ProductList";

export const HomePage = () => {
  const { get } = useAxios();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    get().then((resp) => setProducts(resp));
  }, []);

  return (
    <>
      <section>
        <ProductList products={products} />
      </section>
    </>
  );
};
