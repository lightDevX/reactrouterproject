import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Books from "./components/Books/Books";
import Contact from "./components/Contact/Contact";
import BookHome from "./components/Home/BookHome";
import Register from "./components/Register/Register";
import Root from "./components/Root/Root";
import "./index.css";
import Loading from "./Utilities/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>This is Error page</div>,
    children: [
      {
        path: "/",
        element: <BookHome></BookHome>,
      },
      {
        path: "/books",
        loader: () => fetch("/bookData.json"),
        element: <Books />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // {
      //   path: "/contact-us",
      //   element: <StateForm></StateForm>,
      // },
      // {
      //   path: "/contact-ref",
      //   element: <RefForm></RefForm>,
      // },
      // {
      //   path: "/users",
      //   loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      //   element: <Users></Users>,
      // },
      // {
      //   path: "/user/:userId",
      //   loader: ({ params }) =>
      //     fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      //   element: <UserDetail></UserDetail>,
      // },
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
