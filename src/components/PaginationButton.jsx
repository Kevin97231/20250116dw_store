/* eslint-disable react/prop-types */
export const PaginationButton = ({ number, handleClick }) => {
  console.log(number);
  return (
    <>
      <button
        className="join-item btn btn-lg"
        onClick={() => handleClick(number)}
      >
        {number}
      </button>
    </>
  );
};
