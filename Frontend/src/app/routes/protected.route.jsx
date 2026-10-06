import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    const user = useSelector(state => state.auth.user);
    const isLoading = useSelector(state => state.auth.isLoading);

    if(!user) return <Navigate to="/" replace/>
    if(isLoading) return <h1>loading.....</h1>

  return <Outlet/>
}

export default ProtectedRoute
