import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigator from "../admin/navigator/navigator"
import { ToastContainer } from 'react-toastify';

function AdminLayout({userData}) {
    return <>

    <Navigator userData={userData} />
    <ToastContainer />
    <Outlet >
   </Outlet >
   
</>
}

export default AdminLayout


