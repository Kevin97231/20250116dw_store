import { Link } from "react-router-dom";
import { HeaderItem } from "./HeaderItem";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <div className="navbar-start">
        <div className="w-1/12">
          <Link to={"/"}>
            <img src="/src/assets/logo.png" alt="" />
          </Link>
        </div>
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Burger list */}
            <li>
              <Link to={"/"}>Accueil</Link>
              <Link to={"/products"}>Nos produits</Link>
              <Link to={"/compteur-redux"}>Compteur redux</Link>
              <Link to={"/cart"}>Panier</Link>
            </li>
            {/* __________________________________________________________________ */}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <HeaderItem href={"/products"}>Nos produits</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/compteur-redux"}>Compteur Redux</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/cart"}>Mon panier</HeaderItem>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
    </div>
  );
};
