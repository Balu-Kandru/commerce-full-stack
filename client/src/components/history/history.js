import axios from "axios";
import { useEffect, useState } from "react";
import "../product/product.css"
import Header from "../header/header";
import Navbar from "../navbar/navbar";

const History = ()=> {
    const [list, setlist] = useState([]);
    useEffect(()=> {
        const authToken = localStorage.getItem("authorization");
        axios({
            method: "GET",
            url: "http://localhost:3001/product/purchased",
            headers:{
                authorization: authToken,
            }
        }).then((itemData)=> {
            setlist(itemData.data);
            console.log(itemData.data)
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
                </div>
            )
        })}
        
    </div>
    </>
    )
    
};
export default History