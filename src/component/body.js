import { useEffect, useState } from "react";
//import { restrauntList } from "./constant";
import RestrauntCard from "./restrauntCard";
import Shimmer from "./Shimmer";

 function filterData(searchText, allRestaurants){
    const filterData= allRestaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
   
    );
   return filterData; 
 };
 
const Body = () =>{ 
    const [filterRestaurants, setfilterRestaurants] = useState([]);
    const[allRestaurants, setallRestaurants] = useState([]);
    //const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getRestaurant();
    },[]);

   async function getRestaurant(){
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    const json = await data.json();
    
    setfilterRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants );
    setallRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants );
    //console.log(setRestaurants)
    
    
   }
   //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4626559&lng=73.8361927&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
   //
   //conditional Redering
   //if restraunt is empty => shimmer ui
   //if restraunt has data => actual data ui

   //not render component (Early Return)
   if (!allRestaurants) return null;
   if(filterRestaurants.length == 0 )
   return <h1>No restraunt match your Filter</h1>

    return filterRestaurants.length == 0 ? <Shimmer/> :(
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
                data = filterData(searchText, allRestaurants)
                //const data= filterData(searchText, restaurants);
                //update data setfilterRestaurants -> allRestaurants
                setfilterRestaurants(data);
            }}>Search</button>
            
        </div>

        <div className="restraunt-list">
            {filterRestaurants.map((restaurant) =>{
                return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
                
            })}
            {/* filterRestaurants */}
        </div>
    </>    
    );
};

export default Body;