import React, { useContext } from "react";
import { AppContext } from "../context/App.Context";
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { authToken } = useContext(AppContext);

    return authToken != '' ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;