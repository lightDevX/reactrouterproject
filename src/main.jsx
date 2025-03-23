import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RefForm from "./components/Form/RefForm/RefForm";
import StateForm from "./components/Form/StateForm/StateForm";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import UserDetail from "./components/Users/UserDetail";
import Users from "./components/Users/Users";
import "./index.css";
import Loading from "./Utilities/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>This is Error page</div>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/contact-us",
        element: <StateForm></StateForm>,
      },
      {
        path: "/contact-ref",
        element: <RefForm></RefForm>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetail></UserDetail>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Suspense>
  </StrictMode>,
);
