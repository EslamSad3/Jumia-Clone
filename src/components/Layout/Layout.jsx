import React, { useState } from 'react'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import Banner from '../shared/Banner/Banner'
import Languages from '../shared/Languages/Languages'
import { Outlet } from 'react-router-dom'

export default function Layout({userData}) {
    return <>
        <Banner />
        <Languages />
        <Navbar userData={userData} />
        <Outlet >
        </Outlet >
        <Footer />
    </>
}
