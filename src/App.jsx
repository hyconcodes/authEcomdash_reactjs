import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { toast } from 'react-toastify'
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import NotFoundPage from './pages/NotFoundPage';
import GuestLayout from './Layout/GuestLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="/add_product" element={<AddProduct />} />
            <Route path="/edit_product" element={<EditProduct />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>

        {/* <Route path="/login" element={<GuestLayout />} > */}
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* </Route> */}
      </>
    )
  );

  return <RouterProvider router={router} />
}

export default App
