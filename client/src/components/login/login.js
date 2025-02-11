import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Header from "../header/header";
import "./login.css"
import { baseUrl } from "../utilities";

const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({ userName: "", password: "" })
    
    const handleLogin = () => {
        axios({
            url: `${baseUrl}/user/login`,
            method: "POST",
            headers: {
            },
            data: { username: login.userName, password: login.password }
        }).then((loginData) => {
            localStorage.setItem("authorization", loginData.data.authToken);
            alert("user login successfull")
            navigate("/products")
        }).catch((err) => {
            alert(err.response.data)
            console.log(err)
        })
    }

    return (
        <>
            <Header />
            <div className="login" >
                <div className="login_name" >
                    <label for="username">Username:</label>
                </div>
                <div>
                    <input id="username" type="text" onChange={(e) => { setLogin({ ...login, userName: e.target.value }) }} />
                </div>

                <div className="login_name">
                    <label for="username">Password:</label>
                </div>
                <div>
                    <input id="password" type="password" onChange={(e) => { setLogin({ ...login, password: e.target.value }) }} />
                </div>

                <button type="button" onClick={handleLogin}>Login</button>
                <h2>or</h2>
                <button onClick={() => navigate('/signup')} >signup?</button>
            </div>
        </>
    )
}

export default Login