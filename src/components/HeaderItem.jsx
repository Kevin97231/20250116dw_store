/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ href, children }) => {
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  return (
    <>
      <Link
        to={href}
        className={`${
          pathname === href && "border-b-2 border-primary font-bold"
        }`}
      >
        {children}
      </Link>
    </>
  );
};
