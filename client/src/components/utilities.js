import axios from "axios";
import { Navigate } from "react-router-dom";
    
const handleBuy = (item)=> {
    console.log(item)
    const payload = {
        id: item.item_id,
        price:item.quantities*item.price
    }
    const authToken = localStorage.getItem("authorization");
    axios({
        url: "http://localhost:3001/product/buy",
        method: "POST",
        headers:{
            authorization: authToken,
        },
        data: payload
    }).then((res)=> {
        alert(res.data)
    }).catch((err)=> {
        console.log(err)
    })

}

const Protected = ({children})=> {
    const token = localStorage.getItem("authorization");
    //""
    return (
        <>
        {token.length ? children: <Navigate to="/"/>}
        </>
    )
}

const Isuserloggedin = ({children})=> {
    const token = localStorage.getItem("authorization");
    //""
    return (
        <>
        {token.length ? <Navigate to="/products"/> :children}
        </>
    )
}

export {handleBuy,Protected,Isuserloggedin}