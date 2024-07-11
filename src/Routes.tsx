import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import App from './App';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'products', element: <ProductsPage /> }],
  },
]);

//

export function Routes() {
  return <RouterProvider router={routers} />;
}
