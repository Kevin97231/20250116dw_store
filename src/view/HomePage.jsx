import { useEffect, useState } from "react";
import { useAxios } from "../Hooks/useAxios";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";

export const HomePage = () => {
  const { getPaginate, page, perPage, setPage, setPerPage } = useAxios();

  const [products, setProducts] = useState([]);

  const [responseObject, setResponseObject] = useState({ pages: 0, items: 0 });

  useEffect(() => {
    getPaginate().then((resp) => {
      console.log(resp);
      setResponseObject({ pages: resp.pages, items: resp.items });
      setProducts(resp.data);
    });
  }, [page, perPage]);

  const clickOnButonPagination = (number) => {
    setPage(number);
  };

  return (
    <>
      <section>
        <ProductList products={products} />

        <Pagination
          handleClick={clickOnButonPagination}
          nbrButton={responseObject.pages}
        />
      </section>
    </>
  );
};
