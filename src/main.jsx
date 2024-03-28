import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import ListedBooks from './Components/Pages/ListedBooks';
import PagesToRead from './Components/Pages/PagesToRead';
import BookDetails from './Components/Pages/BookDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBooks from './Components/Parts/ReadBooks';
import WishlistBooks from './Components/Parts/WishlistBooks';
import FamousBooks from './Components/Pages/FamousBooks';
import AddBooks from './Components/Pages/AddBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../bookData.json`)
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/famous',
        element: <FamousBooks></FamousBooks>
      },
      {
        path: '/add',
        element: <AddBooks></AddBooks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
