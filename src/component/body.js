 import { useState } from "react";
import { restrauntList } from "./constant";
 import RestrauntCard from "./restrauntCard";

 function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant)=>
    restaurant.card.card.info.name.includes(searchText)
    
    )
    return filterData;
 };
 
const Body = () =>{ 
    const [restaurants, setRestaurants] = useState(restrauntList);
    const [searchText, setSearchText] = useState("");
return(
    <>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}
            ></input>

            <button 
            className="search-btn"
            onClick={()=>{
                //filter data
                console.log("clicked")
                const data= filterData(searchText, restaurants);
                //update data
                setRestaurants(data);
            }}>Search- {searchText}</button>
        </div>
        
        
        <div className="restraunt-list">
            {restrauntList.map((restaurant) =>{
                return <RestrauntCard {...restaurant.card.card.info} key={restaurant.card.card.info.id} />
                
            })}
        </div>
    </>    
    );
};

export default Body;
  

