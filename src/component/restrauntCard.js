import { CDN_img } from "./constant";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, costForTwo }) =>{
    return (
      <div className="card">
        <img 
        src=
        { CDN_img + cloudinaryImageId } alt="restroImg"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwo} ₹</h4>
      </div>
    )
};
//
export default RestrauntCard;