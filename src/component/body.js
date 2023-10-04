 import { useState } from "react";
import { restrauntList } from "./constant";
 import RestrauntCard from "./restrauntCard";

 function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant)=>{
        restaurant.data.name.includes(searchText)
    })
    return filterData;
 };

const Body = () =>{ 
    const [restaurants, setRestaurants] = useState(restrauntList);
    const [searchText, setSearchText] = useState();
return(
    <>
    <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={setSearchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
        }}
        ></input>

        <button 
        className="search-button"
        onClick={()=>{
            //filter data
            const data= filterData(searchText, restaurants)
            //update data
            setRestaurants(data)
        }}>Search</button>
    </div>
    <div className="restraunt-list">
    {restrauntList.map((restaurant) =>{
        return <RestrauntCard {...restaurant.card.card.info} key={restaurant.card.card.info.id} />
    })}
    {console.log(restrauntList)}

</div>
    </>
    
    
);
};
//
export default Body;
  

