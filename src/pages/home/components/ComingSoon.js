import "./comingsoon.scss"
export const ComingSoon = ({imageSrc}) =>{

    return(
<div className="d-flex flex-column align-items-center ">
    <div className="image-container">
        <img src={imageSrc} className="" alt="" />
        
    </div>
    <span className="comingSpan  text-center">Coming Soon</span>
    
</div>

    )
}