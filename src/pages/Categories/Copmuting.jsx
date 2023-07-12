import React from 'react'
import "./Copmuting.css"
import SidebarOfCategories from '../../components/SidebarOfCategories/SidebarOfCategories'
import ProductList from '../../components/ProductList/ProductList'

export default function Copmuting() {
    return <>

        <div className="container my-5">
            <div className="container text-center border shadow px-0">
                <h4 className="p-2" style={{ background: "#FEE2CC" }}>
                    SHOP BY CATEGORY
                </h4>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2 p-2">
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/Computing/Laptops__260_x_144_.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title link">Laptops</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/Computing/-_Printers_&_Scanners_.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title">Printers & Scanners</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/Computing/Hard_drives_260_x_144_.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title">Data Storage</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/Computing/Access_points_260.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title">Networking</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/icons-21/260x144/phones/LaptopBags.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title">Laptop Bags</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" className="btn">
                            <div class="card h-100">
                                <img
                                    src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/Computing/computer_accessories_260_x_144_copy_6.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h6 class="card-title">Accessories</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3 p-3 border shadow">
                    <div className="col-lg-3 d-lg-block d-none bg-light mx-0 p-8">
                        <SidebarOfCategories />
                    </div>
                    <div className="col-lg-9 col-12">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>

    </>
}
