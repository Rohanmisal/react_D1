import { CDN_img } from "./constant";

const RestrauntCard = ({banner_image_es, brand_name }) =>{
    return (
      <div className="card">
      <img src={banner_image_es} alt="rsetro"/>
      <h2>{brand_name}</h2>
        {/* <img 
        src=
        { CDN_img + cloudinaryImageId } alt="restroImg"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwo} </h4> */}
      </div>
    )
};
// name, cuisines, cloudinaryImageId, costForTwo
// banner_image_es, brand_name  .join(", ")
export default RestrauntCard;