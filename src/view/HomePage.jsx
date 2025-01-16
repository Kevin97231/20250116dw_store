import { useEffect, useState } from "react";
import { useAxios } from "../Hooks/useAxios";
import { ProductList } from "../components/ProductList";

export const HomePage = () => {
  const { get, getPaginate } = useAxios();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getPaginate().then((resp) => {
      console.log(resp);
      setProducts(resp.data);
    });
  }, []);

  return (
    <>
      <section>
        <ProductList products={products} />
      </section>
    </>
  );
};
