import "./navbar.css"
import { useNavigate } from "react-router-dom"


const Navbar=()=>{
    const navigate=useNavigate()

    const handlelogout = ()=>{
        localStorage.setItem("authorization","");
        navigate("/");
    }
    return (
        <>
            <div className="navbar">
                <ul className="list">
                    <li onClick={()=>navigate('/products')} >products</li>
                    <li onClick={()=>navigate('/cart')} >cart</li>
                    <li onClick={()=>navigate('/history')} >History</li>
                    <li onClick={handlelogout}>Logout</li>
                </ul>
            </div>
        </>
    )
}
export default Navbar