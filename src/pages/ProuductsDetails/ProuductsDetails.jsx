import React from "react";
import "./prouductsDetails.css"


export default function ProductsDetails() {
  return (
    <div className="bg-light">
      <div className="bg-white container">
        <div className="row">
          <div className="col-md-9 ">
            <div className="row ">
              <div className="col-md-4 ">
                <img
                  className="w-100 pt-4 "
                  src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/251804/1.jpg?4586"
                  alt=""
                />

                <hr />
                <h6 className="text-muted">SHARE THIS PRODUCT</h6>
                <span>
                  <i className="fa-brands fa-square-facebook  cursor-pointer text-larger"></i>{" "}
                  <i className="fa-brands fa-square-twitter cursor-pointer text-larger"></i>
                </span>
              </div>
              <div className="col-md-8 pt-3">
                <span className="h4">
                  Waterproof Laptop Backpack With Charging
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa-regular fa-heart icon-heart cursor-pointer"></i>
                </span>
                <div className="pt-2"></div>
                <span>
                  <i class="fa-solid fa-star star-icon"></i>
                  <i class="fa-solid fa-star star-icon"></i>
                  <i class="fa-solid fa-star star-icon"></i>
                  <i class="fa-solid fa-star star-icon"></i>
                  <i class="fa-solid fa-star star-icon"></i>{" "}
                  <span>
                    <a href="">(2 verified ratings)</a>
                  </span>{" "}
                </span>

                <hr />

                <h3 className="fw-bold">EGP 399.00</h3>
                <h6 className="text-muted text-decoration-line-through">
                  EGP 700.00
                </h6>
                <p className="p-color mb-0">Few units left</p>
                <p className="font12">
                  + shipping from EGP 10.83 to 6th of October
                </p>
                <button className="bg-orange form-control w-100 py-2">
                  <a
                    className="text-white fw-bold text-decoration-none"
                    href=""
                  >
                    {" "}
                    <i className="fa-solid fa-cart-plus px-2"></i> ADD TO CART{" "}
                  </a>
                </button>
                <hr className="m-2" />
                <p className=" fw-semibold text-muted m-1">PROMOTIONS</p>
                <i class="fa-solid fa-star star-icon"></i>
                <a className="px-1 text-decoration-none" href="">
                  Flexible Payment Options Available, with 0% interest
                  installments
                </a>
                <br />
                <i class="fa-solid fa-star star-icon"></i>
                <a className="px-1 text-decoration-none" href="">
                  Calculate your monthly payments from here
                </a>
                <br />
                <i class="fa-solid fa-star star-icon"></i>
                <a className="px-1 text-decoration-none" href="">
                  Celebrate our anniversary with us & Enjoy the top deals
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a className=" text-decoration-none pt-2" href="">
              Report incorrect product information
            </a>
          </div>

          <div className="col-md-3 ">
            <p className=" fw-semibold pt-2 m-1">DELIVERY & RETURNS</p>
            <hr className="m-1" />
            <p className="fw-semibold">Choose your location</p>

            <div>
              <label className="w-100 btn-outline-warning mb-3">
                <select className="w-100 py-2 border-0 rounded-1 px-2">
                  <option className="w-100" value="option1">
                    {" "}
                    Giza
                  </option>
                  <option value="option2">cairo</option>
                  <option value="option3">Minya</option>
                  <option value="option3">Fayoum</option>
                </select>
              </label>

              <label className="w-100 btn-outline-warning pb-3">
                <select className="w-100 py-2 border-0 rounded-1 px-2">
                  <option className="w-100" value="option1">
                    {" "}
                    6th of october
                  </option>
                  <option value="option2">al ayat</option>
                  <option value="option3">al wahat</option>
                </select>
              </label>
            </div>

            <div className="d-flex ">
              <i class="fa-solid fa-truck-field text-larger mt-2"></i>
              <div className="justify-content-between pt-1 px-2">
                <p className="fw-semibold m-0">
                  Door Delivery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a className=" text-decoration-none" href="">
                    details
                  </a>
                </p>
                <p className="m-0 font12">Delivery EGP 22.23</p>
                <p className="font12">
                  Ready for delivery between 05 July & 06 July when you order
                  within next 3hrs 56mins
                </p>
              </div>
            </div>

            <div className="d-flex ">
              <i class="fa-solid fa-handshake text-larger mt-2"></i>
              <div className="justify-content-between pt-1 px-2">
                <p className="fw-semibold m-0 ">
                  Pickup Station &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a className=" text-decoration-none" href="">
                    details
                  </a>
                </p>
                <p className="m-0 font12">Delivery EGP 22.23</p>
                <p className="font12">
                  Ready for delivery between 05 July & 06 July when you order
                  within next 3hrs 56mins
                </p>
              </div>
            </div>
            <div className="d-flex ">
              <i class="fa-solid fa-rotate-left text-larger mt-2"></i>
              <div className="justify-content-between pt-1 px-2">
                <p className="fw-semibold m-0">Return Policy</p>
                <p className="font12">
                  Free return within the legal return period from 14 to 30 days,
                  and if they meet the terms & conditions, with the need to
                  report any apparent defect within 48 hours. For more details
                  about return policy.
                </p>
              </div>
            </div>

            <p className="m-0">
              <a
                href=""
                className=" text-decoration-none fw-semibold text-dark"
              >
                SELLER INFORMATION
              </a>
            </p>
            <hr className="m-01" />
            <p className="font12 fw-bold">MMGroup</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-0 font12">80% Seller Score</p>
                <p className="m-0 font12">158 Followers</p>
              </div>
              <div>
                <button className="btn btn-warning">follow</button>
              </div>
            </div>
            <hr className="m-1" />
            <div>
              <p className="fw-bold">Seller Performance</p>
              <p>
                <i class="fa-solid fa-star text-success"></i> Order Fulfillment
                Rate : <strong>Excellent</strong>{" "}
              </p>
              <p>
                <i class="fa-solid fa-star text-success"></i> Quality Score :
                <strong>good</strong>{" "}
              </p>
              <p>
                <i class="fa-solid fa-circle-check"></i> Customer Rating :
                <strong>Average</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row ">
          <div className="col-md-9  bg-white">
            <h5 id="pro-details" className=" fw-semibold pt-2">
              Product details
            </h5>
            <hr />
            <p>
              multi-function back bag, made of waterproof and wear-resistant
              fabric, multi-layer storage space, s-type widened shoulder strap,
              breathable decompression pad, external usb design, convenient
              charging
            </p>
          </div>
          <div className="col-md-3 bg-white ">
            <div>
              <p className="m-2 fw-semibold ">
                <a
                  className="text-decoration-none text-dark"
                  href="#pro-details "
                >
                  Product details
                </a>
              </p>
              <hr className="m-2" />
              <p className="m-2 fw-semibold">
                <a
                  className="text-decoration-none text-dark"
                  href="#specifications "
                >
                  specifications
                </a>
              </p>
              <hr className="m-2" />
              <p className="m-2 fw-semibold">
                <a className="text-decoration-none text-dark" href="#feedback ">
                  Verified Customer Feedback
                </a>
              </p>
              <hr className="m-2" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container bg-white">
        <div className="row">
          <div className="col-lg-9">
            <h5 id="specifications" className=" fw-semibold pt-2">
              Specifications
            </h5>
            <hr />
            <div className="row  px-3 py-2   justify-content-center">
              <div className="col-lg-5">
                <table
                  className="w-100 h-100"
                  style={{ border: "1px solid rgb(156, 152, 152)" }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid rgb(156, 152, 152)",
                          padding: "8px",
                        }}
                      >
                        KEY FEATURES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid rgb(156, 152, 152)",
                          padding: "8px",
                        }}
                      >
                        <ul>
                          <li>Large Capacity. </li>
                          <li>
                            Come with a hand carry strap and adjustable shoulder
                            strap{" "}
                          </li>
                          <li>Wide & thick ,comfortable for heavy carry </li>
                          <li>With adjustable chest belt </li>
                          <li>Waterproof </li>
                          <li>Size 14/15.6 </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="col-lg-5">
                <table
                  className="w-100  h-100"
                  style={{ border: "1px solid rgb(156, 152, 152)" }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid rgb(156, 152, 152)",
                          padding: "8px",
                        }}
                      >
                        SPECIFICATIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid rgb(156, 152, 152)",
                          padding: "8px",
                        }}
                      >
                        <ul>
                          <li>
                            <strong>SKU:</strong> GE810EA1CYXWCNA
                          </li>
                          <li>
                            <strong>Model:</strong> Mein-01-Black
                          </li>
                          <li>
                            <strong>Production Country</strong>Malaysia
                          </li>
                          <li>
                            <strong>Size (L x W x H cm):</strong> 44x14x31cm
                          </li>
                          <li>
                            <strong>Color</strong> Black
                          </li>
                          <li>
                            <strong>Main Material:</strong>Waterproof{" "}
                          </li>
                          <li className=" list-unstyled font1 pt-5">....</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="row">
              <div className="col-md-5">
                <img
                  className="w-100 pt-4 "
                  src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/251804/1.jpg?4586"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <p className="pt-4"> Laptop Backpack..</p>
                <p className="fw-bold m-0">EGP 399.00</p>
                <h6 className="font12 text-muted text-decoration-line-through">
                  EGP 700.00
                </h6>
              </div>
              <div className="m-2">
                <button className="bg-orange form-control w-100 py-2">
                  <a
                    className="text-white fw-bold text-decoration-none"
                    href=""
                  >
                    {" "}
                    <i className="fa-solid fa-cart-plus px-2"></i> ADD TO CART{" "}
                  </a>
                </button>
              </div>

              <div className="w-100 pt-3">
                <p className="font12 text-center">
                  Questions about this product?
                </p>

                <p className="text-center fw-bold text-warning cursor-pointer">
                  <i class="fa-regular fa-message "></i> CHAT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="container bg-white">
        <div className="row">
          <div className="col-md-9 ">
            <div className="d-flex justify-content-between pt-3 pb-1">
              <p id="feedback" className="text-start fw-semibold m-0">
                Verified Customer Feedback
              </p>
              <p className="text-end m-0">
                <a
                  className="text-warning fw-bold text-decoration-none "
                  href=""
                >
                  SEE ALL
                </a>
              </p>
            </div>
            <hr className="mt-1" />

            <div className="row">
              <div className="col-md-3">
                <p className="fw-semibold">VERIFIED RATINGS (2)</p>
                <div className="container  bg-light">
                  <h1 className="text-center text-warning">5/5</h1>
                  <div className="text-center">
                    <i class="fa-solid fa-star star-icon"></i>
                    <i class="fa-solid fa-star star-icon"></i>
                    <i class="fa-solid fa-star star-icon"></i>
                    <i class="fa-solid fa-star star-icon"></i>
                    <i class="fa-solid fa-star star-icon"></i>
                  </div>
                  <p className="text-center">2 verified ratings</p>
                </div>
              </div>
              <div className="col-md-9">
                <p>PRODUCT REVIEWS (1)</p>
                <i class="fa-solid fa-star star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
                <p className="fw-bold pt-2">جيد</p>
                <p className="my-1">جيد جدا</p>

                <div className="d-flex justify-content-between">
                  <p className="text-muted ">22-06-2023 by Ahmed</p>
                  <p className=" text-success">
                    {" "}
                    <i class="fa-solid fa-circle-check"></i> Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
