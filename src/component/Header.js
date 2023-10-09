//import { Link } from "react-router-dom";
import { useState } from "react";
const isLoggedIn =() =>{
    return false;
};

// SPA - Single Page Application ???
//Client Side Routing

export const Title = () => {
    return(
        <a href="/">
        <img 
        className="logo"
        alt="logo"
        src="https://th.bing.com/th/id/OIP.n5_4eUutfUGFimv0hySlVQHaHX?pid=ImgDet&rs=1"/>
        </a>
        
    );
};
    
const Header = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
return (
    <div className="header">
    <Title/>
    <div className="nav-items">
    <ul>
        {/* <Link to="/">

        </Link> */}
        <li>Home</li>
        {/* <Link to="/about">

        </Link> */}
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
    {/* <div className="nav-items">
        <button className="log"
        onClick={() =>{
            setIsLoggedIn(loggedInUser)
        }}>{isLoggedIn}</button>
    </div> */}
    {isLoggedIn ?(
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    ): (
        <button onClick={()=> setIsLoggedIn(true)}>Login</button>
    )}
    </div>
);
};

export default Header;