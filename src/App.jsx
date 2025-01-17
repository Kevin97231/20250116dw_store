import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./view/NotFound";
import { HomePage } from "./view/HomePage";
import { ProductDetail } from "./view/ProductDetail";
import { CompteurRedux } from "./view/CompteurRedux";
import { Cart } from "./view/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <>ERREUR</>,
      children: [
        { path: "", element: <HomePage /> },
        { path: "/product/:id", element: <ProductDetail /> },
        { path: "/compteur-redux", element: <CompteurRedux /> },
        { path: "/cart", element: <Cart /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;

// EXEMPLE, MM GESTION QUE PROJET PRECEDENT :
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<>HOMEPAGE</>} />
//         <Route path="/products" element={<>PRODUCTS</>} />
//         <Route path="*" element={<>404</>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
