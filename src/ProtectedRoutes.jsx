import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const CURRENTUSER = JSON.parse(localStorage.getItem('CURRENTUSER'));
    if (!CURRENTUSER) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}
export default ProtectedRoutes
