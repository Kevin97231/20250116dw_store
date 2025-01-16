/* eslint-disable react/prop-types */
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ handleClick, nbrButton }) => {
  //   const myTable = new Array(nbrButton);

  //   Ex, si nbr = 3 ==> [1,2,3]
  const numbers = Array.from({ length: nbrButton }, (_, index) => index + 1);

  console.log(numbers);
  return (
    <>
      <div className="bg-white join">
        {numbers.map((number) => (
          <PaginationButton
            key={number}
            number={number}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};
