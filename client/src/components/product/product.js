import axios from "axios";
import { useEffect, useState } from "react";
import "./product.css"
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import { baseUrl } from "../utilities";


const Product = () => {
    const [Type, setType] = useState("");
    const [items, setItems] = useState([]);
    const authToken = localStorage.getItem("authorization");

    useEffect(() => {
        if (Type.length) {
            axios({
                method: "GET",
                url: `${baseUrl}/product/${Type}`,
            }).then((itemData) => {
                setItems(itemData.data);
            }).catch((err) => {
                console.log(err)
                console.log("ji")
            })
        } else {
            axios({
                method: "GET",
                url: `${baseUrl}/product/show`
            }).then((itemData) => {
                setItems(itemData.data.item);
            }).catch((err) => {
                console.log(err)
            })
        }

    }, [Type])

    const handleBuy = (item) => {
        console.log(item)
        const payload = {
            id: item._id,
        }

        axios({
            url: `${baseUrl}/product/buy`,
            method: "POST",
            headers: {
                authorization: authToken,
            },
            data: payload
        }).then((res) => {
            alert(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }

    const handleCart = (item) => {
        const payload = {
            itemid: item._id,
            price: item.price,
            name: item.name
        }
        axios({
            url: `${baseUrl}/cart/add`,
            method: "POST",
            headers: {
                authorization: authToken,
            },
            data: payload
        }).then((res) => {
            alert(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <Header />
            <Navbar />

            <div>
                <select className='opt' onChange={(e) => setType(e.target.value)}>
                    <option value="" >All</option>
                    <option value="shirts">shirts</option>
                    <option value="jeans">jeans</option>
                    <option value="footwear">footwear</option>
                </select>
            </div>
            <div className="container">
                {items.map((item, i) => {
                    return (
                        <div className="item-card" key={i}>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.category}
                            </div>
                            <div>
                                {`Rs. ${item.price}`}
                            </div>
                            <button onClick={() => { handleCart(item) }}>Add To Cart</button>
                            <button onClick={() => { handleBuy(item) }}>Buy Now</button>
                        </div>
                    )
                })}

            </div>
        </>
    )

};
export default Product