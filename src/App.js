import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About'
import { productsAndCartLoaders } from './loaders/products&cartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: "order",
          loader: productsAndCartLoaders,
          element: <Order></Order>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
