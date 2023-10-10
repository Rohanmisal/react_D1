import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_img } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestrauntMenu = () => {
    const {resId} = useParams();
    //const [restaurants, setRestaurants] = useState(null);

    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[]);

    // async function getRestaurantInfo(){
    //     const data = await fetch(
    //         "" + resId
    //     );
    //     const json = await data.json();
    //     console.log(json)
    //     setRestaurants(json.data)
    // }
    
    const restaurant = useRestaurant(resId);
    
    return (!restaurant) ? <Shimmer/> :(
        <div className="menu">
            {/* <div>
                <h1>Restraunt id :{resId}</h1>
                <h2>{restaurants?.name}</h2>
                <img src={ CDN_img + restaurants?.cloudinaryImageId } alt="restroImg"/>
                <h3>{restaurants?.area}</h3>
                <h3>{restaurants?.city}</h3>
                <h3>{restaurants?.avgRating}</h3>
                <h3>{restaurants?.costForTwo}</h3>
            </div> */}
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.collections).map((item)=>(
                        <li key={collections.collection_id}>{collections.collection_name}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
};

export default RestrauntMenu;