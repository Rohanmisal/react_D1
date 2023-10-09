import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_img } from "./constant";
import Shimmer from "./Shimmer";


const RestrauntMenu = () => {
    const {resId} = useParams();
    const [restaurants, setRestaurants] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(
            "" + id
        );
        const json = await data.json();
        console.log(json)
        setRestaurants(json.data)
    }
    
       
    
    return (!restaurants) ? <Shimmer/> :(
        <div className="menu">
            <div>
                <h1>Restraunt id :{resId}</h1>
                <h2>{restaurants.name}</h2>
                <img src={ CDN_img + restaurants.cloudinaryImageId } alt="restroImg"/>
                <h3>{restaurants.area}</h3>
                <h3>{restaurants.city}</h3>
                <h3>{restaurants.avgRating}</h3>
                <h3>{restaurants.costForTwo}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurants?.menu?.items).map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
};

export default RestrauntMenu;