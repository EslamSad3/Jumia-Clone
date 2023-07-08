import React, { useEffect, useState } from 'react'
import "./BackToUpBtn.css"
export default function BackToUpBtn() {
    const [backToTopBtn, SetBackToBackBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            (window.scrollY > 100) ? SetBackToBackBtn(true) : SetBackToBackBtn(false)
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return <>
        {backToTopBtn && (
            <button className='btn rounded-5' style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "1.1rem"
            }} onClick={() => scrollUp()}><i className='fa fa-arrow-alt-circle-up'></i> </button>
        )}
    </>
}
