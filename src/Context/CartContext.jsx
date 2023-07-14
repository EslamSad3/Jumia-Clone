import axios from "axios";

const { createContext, useEffect, useState } = require("react");

export let cartContext = createContext()

export function CartContextProvider(props) {

    const [cardId, setcardId] = useState(null)
    const [numOfCartItems, setnumOfCartItems] = useState(0)

    async function getCart() {
        let res = await getLoggedUserCart()
        if (res?.data?.status === 'success') {

            setnumOfCartItems(res.data.numOfCartItems)

        }
        // console.log(res.data.data)


    }

    useEffect(() => {

        getCart()

    }, [])





    let headers = {
        token: `Bearer ${localStorage.getItem('UserToken')}`
    }

    function addToCart(productId) {
        return axios.post(`https://jumia-clone-api-9qqm.onrender.com/api/team2/cart`,
            {
                productId: productId


            },
            { headers: { 'Authorization': headers.token } }
        ).then((res) => res).catch((err) => err)
    }

    function getLoggedUserCart() {
        return axios.get(`https://jumia-clone-api-9qqm.onrender.com/api/team2/cart`,

            { headers: { 'Authorization': headers.token } }
        ).then((res) => res).catch((err) => err)
    }

    function removeItem(productId) {
        return axios.delete(`https://jumia-clone-api-9qqm.onrender.com/api/team2/cart/${productId}`,
            { headers: { 'Authorization': headers.token } }
        ).then((res) => res).catch((err) => err)
    }
    function updateProductCount(productId, quantity) {
        return axios.put(`https://jumia-clone-api-9qqm.onrender.com/api/team2/cart/${productId}`, {
            quantity: quantity
        },
            { headers: { 'Authorization': headers.token } }
        ).then((res) => res).catch((err) => err)
    }


    function removeCart() {
        return axios.delete(`https://jumia-clone-api-9qqm.onrender.com/api/team2/cart`,
            { headers: { 'Authorization': headers.token } }
        ).then((res) => res).catch((err) => err)
    }


    return <cartContext.Provider value={{ addToCart, getLoggedUserCart, removeItem, updateProductCount, numOfCartItems, setnumOfCartItems, removeCart }}>
        {props.children}
    </cartContext.Provider>
}