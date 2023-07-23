import jwtDecode from 'jwt-decode'
import React from 'react'
import { Navigate } from 'react-router'

export default function ProtectedRoute(prpos) {
    const tokenData = localStorage.getItem('UserToken')
    const auth = jwtDecode(tokenData)
    if (localStorage.getItem('UserToken') == null || auth.role !== "seller") {
        return <Navigate to={'/'} />
    }
    else {

        return prpos.children
    }


}