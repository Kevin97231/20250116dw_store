import { useEffect, useState } from "react";
import { useAxios } from "../Hooks/useAxios";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { MySelect } from "../components/MySelect";

export const HomePage = () => {
  const { getPaginate, page, perPage, setPage, setPerPage } = useAxios();
  const [products, setProducts] = useState([]);
  const [responseObject, setResponseObject] = useState({ pages: 0, items: 0 });
  const [tableSelect, setTableSelect] = useState([]);

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

  useEffect(() => {
    if (responseObject.items) {
      const array = Array.from(
        { length: responseObject.items },
        (_, index) => ({
          value: index + 1,
          label: index + 1,
        })
      );
      setTableSelect(array);
    }
  }, [responseObject]);

  const selectOnChange = (number) => {
    setPerPage(number);
  };

  return (
    <>
      <section>
        <ProductList products={products} />

        <Pagination
          handleClick={clickOnButonPagination}
          nbrButton={responseObject.pages}
        />

        <MySelect
          value={perPage}
          handleSelectCHange={selectOnChange}
          options={tableSelect}
        ></MySelect>
      </section>
    </>
  );
};
