import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


import React from 'react'

function SellerLayout() {
    return <>

    <Navigator userData={userData} />
    <ToastContainer />
    <Outlet >
   </Outlet >
   
</>
}

export default SellerLayout


