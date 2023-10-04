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
return (
    <div className="header">
    <Title/>
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
    
    </div>
);
};

export default Header;