import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Card = ({ product }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`product/${product.id}`);
  };

  return (
    <div className="flex shadow-xl card bg-base-100 w-96">
      <figure>
        <div>
          <div className="h-40">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.decription}</p>
        <p>{product.price}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary" onClick={navigateToDetail}>
            Voir
          </button>
        </div>
      </div>
    </div>
  );
};
