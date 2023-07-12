import React from "react";
import  "./Footer.css";
import logo from "../../../assets/imgs/logowihte.png";
import logo2 from "../../../assets/imgs/JMIA.png";
export default function Footer() {
    return (
        <div className="text-white " style={{ backgroundColor: "#535357" }}>
            <div className="row m-0 bg-dark">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={logo} className="logowite" alt="" />
                </div>
                <div className="col m-2 maildiv">
                    <h6 className="h6">NEW TO JUMIA?</h6>
                    <p>
                        Subscribe to our newsletter to get updates on our latest offers!
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-start align-items-center bg-white p-2 rounded-2 mx-1 ">
                            <i
                                className="fa-solid fa-envelope mail"
                                style={{ color: "#535357" }}
                            ></i>{" "}
                            <input
                                className="form-control inpmail"
                                type="email"
                                placeholder="Enter E-mail Address"
                            />
                        </div>
                        <div>
                            <button className="btn btn-outline-light p-2 mx-1">MALE</button>
                            <button className="btn btn-outline-light p-2 mx-1">FEMALE</button>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="rounded-2" style={{ backgroundColor: "#FE9900" }}>
                            <img
                                src={logo2}
                                style={{ width: "50px", height: "50px" }}
                                alt=""
                            />
                        </div>
                        <div className="mt-3 ms-2">
                            <h6>DOWNLOAD JUMIA FREE APP</h6>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="border border-1 rounded-1 mx-2">
                            <div className="d-flex justify-content-center align-items-center px-2">
                                <i className="fa fab fa-apple me-2"></i>
                                <div>
                                    <small style={{ fontSize: "8px" }}>Download On The</small>
                                    <p>App Store</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 rounded-1 mx-2">
                            <div className="d-flex justify-content-center align-items-center px-2">
                                <i className="fa fab fa-google-play me-2"></i>
                                <div>
                                    <small style={{ fontSize: "8px" }}>Get It ON</small>
                                    <p>Play Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white mt-3 ">
                <div className="row m-0 ">
                    <div className="col d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <ul>
                                <span className=" d-block my-2">NEED HELP?</span>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-help/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-contact/"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-shop/"
                                    >
                                        How to shop on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-pay/"
                                    >
                                        How to pay on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-delivery-timelines/"
                                    >
                                        Delivery timelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-dispute-resolution-policy/"
                                    >
                                        Dispute Resolution Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-returns-and-refunds-policy/"
                                    >
                                        Return &amp; Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-payment-guidelines/"
                                    >
                                        Payment Information Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="join mb-4">
                            <small>
                                <strong className="text-uppercase d-block my-3">
                                    join us on
                                </strong>
                            </small>
                            <i
                                className="fa fab fa-facebook join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-twitter join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-instagram join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-youtube join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column justify-content-start">
                                <a className="link text-white" href="#">Active</a>
                                <a className="link text-white" href="#">ADIDAS</a>
                                <a className="link text-white" href="#">American Eagle</a>
                                <a className="link text-white" href="#">Andora</a>
                            </div>
                            <div className="d-flex flex-column justify-content-start mx-3">
                                <a className="link text-white" href="#">Apple</a>
                                <a className="link text-white" href="#">Braun</a>
                                <a className="link text-white" href="#">Casio</a>
                                <a className="link text-white" href="#">Cottonil</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <ul>
                                <span className=" d-block my-2">NEED HELP?</span>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-help/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-contact/"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-shop/"
                                    >
                                        How to shop on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-pay/"
                                    >
                                        How to pay on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-delivery-timelines/"
                                    >
                                        Delivery timelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-dispute-resolution-policy/"
                                    >
                                        Dispute Resolution Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-returns-and-refunds-policy/"
                                    >
                                        Return &amp; Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-payment-guidelines/"
                                    >
                                        Payment Information Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="join mb-4">
                            <small>
                                <strong className="text-uppercase d-block my-3">
                                    join us on
                                </strong>
                            </small>
                            <i
                                className="fa fab fa-facebook join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-twitter join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-instagram join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-youtube join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column justify-content-start">
                                <a className="link text-white" href="#">Active</a>
                                <a className="link text-white" href="#">ADIDAS</a>
                                <a className="link text-white" href="#">American Eagle</a>
                                <a className="link text-white" href="#">Andora</a>
                            </div>
                            <div className="d-flex flex-column justify-content-start mx-3">
                                <a className="link text-white" href="#">Apple</a>
                                <a className="link text-white" href="#">Braun</a>
                                <a className="link text-white" href="#">Casio</a>
                                <a className="link text-white" href="#">Cottonil</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <ul>
                                <span className=" d-block my-2">NEED HELP?</span>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-help/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-contact/"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-shop/"
                                    >
                                        How to shop on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-pay/"
                                    >
                                        How to pay on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-delivery-timelines/"
                                    >
                                        Delivery timelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-dispute-resolution-policy/"
                                    >
                                        Dispute Resolution Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-returns-and-refunds-policy/"
                                    >
                                        Return &amp; Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-payment-guidelines/"
                                    >
                                        Payment Information Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="join mb-4">
                            <small>
                                <strong className="text-uppercase d-block my-3">
                                    join us on
                                </strong>
                            </small>
                            <i
                                className="fa fab fa-facebook join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-twitter join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-instagram join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-youtube join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column justify-content-start">
                                <a className="link text-white" href="#">Active</a>
                                <a className="link text-white" href="#">ADIDAS</a>
                                <a className="link text-white" href="#">American Eagle</a>
                                <a className="link text-white" href="#">Andora</a>
                            </div>
                            <div className="d-flex flex-column justify-content-start mx-3">
                                <a className="link text-white" href="#">Apple</a>
                                <a className="link text-white" href="#">Braun</a>
                                <a className="link text-white" href="#">Casio</a>
                                <a className="link text-white" href="#">Cottonil</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <ul>
                                <span className=" d-block my-2">NEED HELP?</span>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-help/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-contact/"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-shop/"
                                    >
                                        How to shop on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-how-to-pay/"
                                    >
                                        How to pay on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-delivery-timelines/"
                                    >
                                        Delivery timelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-dispute-resolution-policy/"
                                    >
                                        Dispute Resolution Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-returns-and-refunds-policy/"
                                    >
                                        Return &amp; Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="link text-white"
                                        href="https://www.jumia.com.eg/sp-payment-guidelines/"
                                    >
                                        Payment Information Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="join mb-4">
                            <small>
                                <strong className="text-uppercase d-block my-3">
                                    join us on
                                </strong>
                            </small>
                            <i
                                className="fa fab fa-facebook join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-twitter join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-instagram join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                            <i
                                className="fa fab fa-youtube join-ico mx-2 p-1"
                                style={{ fontSize: "1.5rem" }}
                            ></i>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column justify-content-start">
                                <a className="link text-white" href="#">Active</a>
                                <a className="link text-white" href="#">ADIDAS</a>
                                <a className="link text-white" href="#">American Eagle</a>
                                <a className="link text-white" href="#">Andora</a>
                            </div>
                            <div className="d-flex flex-column justify-content-start mx-3">
                                <a className="link text-white" href="#">Apple</a>
                                <a className="link text-white" href="#">Braun</a>
                                <a className="link text-white" href="#">Casio</a>
                                <a className="link text-white" href="#">Cottonil</a>
                            </div>
                        </div>
                    </div>
                <hr />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <br />
                <span className="text-start mx-2">English | عربي</span>
            </div>
        </div>
    );
}
