import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import SideBar from '../sidebar/SideBar';



function SellerLayout({ userData }) {
    return <>

        <SideBar userData={userData} />
        <ToastContainer />
        <Outlet >
        </Outlet >

    </>
}

export default SellerLayout


