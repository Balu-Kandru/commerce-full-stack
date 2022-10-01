import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Header from "../header/header";
import "../login/login.css"

const Signup=()=>{
    const navigate=useNavigate()
    const [signup, setSignup] = useState({userName: "", password: ""})
    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3001/user/signup",
            method: "POST",
            headers:{
            },
            data: {username: signup.userName, password: signup.password}
        }).then((res)=> {
           alert(res.data)
           navigate("/")
        }).catch((err)=> {
            if(err.response.status===402){
                alert("please enter all the details")
            }else{
                alert(err.response.data)
            }
            console.log(err)
        })
    }
    return (
        <>
            <Header/>
            <div className="login" >
                <div className="login_name">
                    <label for="username">Username:</label>
                </div> 
                <div>
                    <input id="username" type="text" onChange={(e)=> {setSignup({...signup, userName: e.target.value})}}/>
                </div>

                 <div className="login_name">
                    <label for="username">Password:</label>
                </div>
                <div>
                    <input id="password" type="password" onChange={(e)=> {setSignup({...signup, password: e.target.value})}}/>
                </div>

                <button type="button" onClick={handleLogin}>Signup</button>
                <h2>or</h2>
                <button onClick={()=>navigate('/')} >login ?</button>
                </div>
        </>
    )
}

export default Signup