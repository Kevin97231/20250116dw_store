import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slice/counterSlice";

export const CompteurRedux = () => {
  // La méthode dispacth est la méthode qui nous permet d'accéder à nos reducer
  const dispatch = useDispatch();

  //   Le useSelector nous permet de nous 'abonner' aux données
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Compteur avec Redux</h1>
      <p>{count}</p>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>

      {/* La valeur '5' passé en paramètre sera accessible dans le reducer 
      via l'objet 'action' dans action.payload */}
      <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>
        + 5
      </button>
    </>
  );
};
