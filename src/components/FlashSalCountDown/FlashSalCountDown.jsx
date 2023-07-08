import React from 'react'
import  "./FlashSalCountDown.css"
import Slider from "react-slick";
import flashSale from "../../assets/imgs/flash/1.jpg"

export default function FlashSalCountDown() {
    const flashSettings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return <div className='container bg-white rounded'>
        <div className='row text-white bg-danger text-center align-items-center rounded-1 p-2'>
            <div className="col">
                <h4> <i class="fa-solid fa-tag"></i> Flash Sales Every Day</h4>
            </div>
            <div className="col">
                <h4>Time Left: <span className='timer'>hh:mm:ss </span></h4>
            </div>
            <div className="col">
                <a href="#" className='sell text-white'>SEE All <i className='fa fa-arrow-alt-circle-right'></i></a>
            </div>
        </div>
        <Slider {...flashSettings} >
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card border border-0">
                    <img src={flashSale} alt="" className='' />
                    <div class="card-body">
                        <p>Ahmed Beh French Coffee - Chocolate Flavor - 200gm</p>
                        <h4 class="card-title">EGP 54.10</h4>
                        <p class="card-text">26 Items Left</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}}
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Slider>
    </div>
}
