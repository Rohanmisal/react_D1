import React from "react";
import ReactDOM from "react-dom/client";

    /**
  Header
    - Logo
    - Nav Items
    - Cart
  Body
    - SearchBar
    - RestrauntList
      - RestrauntCard
        - Image 
        - Name 
        -Rating 
        - Cusines
  Footer
    - Links
    - CopyWrites

*/

const Title = () => {
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

const bugerKing = {
  name: "Buger King",
  image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
  cusion:["Burger", "American"],
  rating: "4.2"
}

const RestrauntCard = () =>{
  return (
    <div className="card">
      <img src={bugerKing.image}/>
      <h2>{bugerKing.name}</h2>
      <h3>{bugerKing.cusion.join(", ")}</h3>
      <h4>{bugerKing.rating} Stars</h4>
    </div>
  )
}
const Body = () =>{
  return(
    <div className="restraunt-list">
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
    </div>
    
  );
};

// const Body = () =>{
//   return(
//     <div className="restraunt-list">
//       {restrauntList.map((restaurant) =>{
//         return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
//       })}
//     </div>
    
//   );
// };

const Footer = () =>{
  return(
    <h1>footer</h1>
  );
};

// const heading = React.createElement(
//     "h1",
//     {
//         id:"title1",
//     },
//     "Heading1",
// );

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  );  
}

console.log(<Header/>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);