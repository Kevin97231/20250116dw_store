import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./view/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <>ERREUR</>,
      children: [
        { path: "", element: <>Homepage</> },
        { path: "/products", element: <>my product</> },
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
