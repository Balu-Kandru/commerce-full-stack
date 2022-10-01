import axios from "axios";
import { useEffect, useState } from "react";
import "../product/product.css"
import { handleBuy } from "../utilities";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import "./cart.css"

const Cart = ()=> {
    const [list, setlist] = useState([]);

    useEffect(()=> {
        const authToken = localStorage.getItem("authorization");
        axios({
            method: "GET",
            url: "http://localhost:3001/cart",
            headers:{
                authorization: authToken,
            }
        }).then((itemData)=> {
            setlist(itemData.data.cart);
            //console.log(itemData.data.cart)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container">
            {list.map((item,i)=> {
                return (
                    <div className="item-card" key={i}>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {`Rs. ${item.price}`}
                        </div>
                        <div>
                            <button className="plus_minus">+</button>
                            {item.quantities }
                            <button className="plus_minus" >-</button>
                        </div>
                        <div>
                           total: Rs {item.quantities*item.price}
                        </div>
                        <button onClick={()=> {handleBuy(item)}}>Buy Now</button> 
                    </div>
                )
            })}
            
        </div>
        </>
    )
    
};
export default Cart