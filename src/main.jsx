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
import WishList from './Components/Parts/WishList';
import ReadBooks from './Components/Parts/ReadBooks';

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
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: '/read',
        element: <PagesToRead></PagesToRead>
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
