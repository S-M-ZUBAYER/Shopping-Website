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
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: productsAndCartLoaders,
          element: <Shop></Shop>
        },
        {
          path: "order",
          loader: productsAndCartLoaders,
          element: <Order></Order>
        },
        {
          path: "inventory",
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: "shipping",
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: 'login',
          element: <LogIn></LogIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
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
