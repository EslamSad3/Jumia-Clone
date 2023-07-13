import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export default function TestCart() {
    let { updateProductCount, removeItem, getLoggedUserCart, setnumOfCartItems } = useContext(cartContext)
    const [cartDetails, setcartDetails] = useState(null)

    async function getCart() {
        let res = await getLoggedUserCart()
        if (res?.data?.status === 'success') {
            if (res.data.numOfCartItems === 0) {
                setcartDetails(null)
            }
            else {

                setcartDetails(res.data.data)
                setnumOfCartItems(res.data.numOfCartItems)
            }
            // console.log(res.data.data)
        }
    }

    async function deleteItem(id) {
        let res = await removeItem(id)
        if (res?.data?.status === 'success') {
            if (res.data.numOfCartItems === 0) {
                setcartDetails(null)
                setnumOfCartItems(res.data.numOfCartItems)
            }
            else {

                setcartDetails(res.data.data)
                setnumOfCartItems(res.data.numOfCartItems)
            }
            // console.log(res.data.data)
        }
    }

    async function updateQuantity(id, count) {
        let res = await updateProductCount(id, count)
        if (res?.data?.status === 'success') {
            if (res.data.numOfCartItems === 0) {
                setcartDetails(null)
            }
            else {

                setcartDetails(res.data.data)
                setnumOfCartItems(res.data.numOfCartItems)

            }
            // console.log(res.data.data)
        }
    }

    const decrease = (id, quantity) => {
        if (quantity > 1) {

            updateQuantity(id, quantity - 1)
        }
    }

    useEffect(() => {
        getCart()
    }, [])
    return (
        <div>
            {
                cartDetails !== null ? <div className="bg-main-light p-4 my-4" >
                    <h3>Shop Cart: </h3>
                    <h6 className='text-danger'>Total Cart Price: {cartDetails.totalCartPrice} EGP</h6>
                    {
                        cartDetails.cartItems.map((item, index) => <div className='row align-items-center border-bottom py-2'>
                            <div className='col-md-1'>
                                <img src={item.product.imageCover} alt="" className='w-100' />
                            </div>
                            <div className='col-md-11 d-flex justify-content-between'>
                                <div>
                                    <h6>{item.product.name}</h6>
                                    <h6 className='text-danger'>price: {item.price}</h6>
                                    <button onClick={() => { deleteItem(item._id) }} className='btn m-0 p-0'><i className='fa-regular fa-trash-can'></i> remove</button>
                                </div>
                                <div>
                                    <button onClick={() => { updateQuantity(item._id, item.quantity + 1) }} className='btn btn-primary'>+</button>
                                    <span className='mx-3' >{item.quantity}</span>
                                    <button onClick={() => { decrease(item._id, item.quantity) }} className='btn btn-primary'>-</button>
                                </div>
                            </div>
                        </div>

                        )
                    }
                </div> : <div>

                    <form className="container rounded-1 bg-white my-4">
                        <div className='text itemCard  justify-content-between align-items-center p-3'>

                            <img src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg" className='w-10 h-10  bg-white imgcard' />
                            <h5 className='bg-white py-2'>Your cart is empty!</h5>
                            <p className='bg-white py-2'>Browse our categories and discover our best deals!</p>
                            <Link to="/"><button className='btn buttonSTART p-3 my-3'>START SHOPPING </button></Link>
                        </div>

                    </form>







                </div>
            }


        </div >
    )
}
