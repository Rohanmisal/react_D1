import { useEffect, useState } from "react";
import { restrauntList } from "./constant";
import RestrauntCard from "./restrauntCard";

 function filterData(searchText, restaurants){
    return restaurants.filter((restaurant)=>
    restaurant.card.card.info.name.includes(searchText)
   
    );
    //return filterData; 
 };
 
const Body = () =>{ 
    //const [filterRestaurants, setfilterRestaurants] = useState();
    //const[allRestaurants, setallRestaurants] = useState();
    const [restaurants, setRestaurants] = useState(restrauntList);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getRestaurant();
    },[]);

   async function getRestaurant(){
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
    const json = await data.json();
    
    setRestaurants(json?.data?.cards[4]?.card?.card?.info);
    //console.log(setRestaurants)
    console.log(json?.data?.cards[4]?.card?.card?.info)
    console.log(json)
   }
   //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4626559&lng=73.8361927&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
   
   //conditional Redering
   //if restraunt is empty => shimmer ui
   //if restraunt has data => actual data ui

   //not render component (Early Return)
   //if (!allRestaurants) return null;
   // filterRestaurants (restaurants.length == 0) ? <Shimmer/> :
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
                
                //const data= filterData(searchText, restaurants);
                //update data setfilterRestaurants -> allRestaurants
                setRestaurants(filterData(searchText, restaurants));
            }}>Search</button>
        </div>

        <div className="restraunt-list">
            {restaurants.map((restaurant) =>{
                return <RestrauntCard {...restaurant.card.card.info} key={restaurant.card.card.info.id} />
                
            })}
            {/* filterRestaurants */}
        </div>
    </>    
    );
};

export default Body;
  

