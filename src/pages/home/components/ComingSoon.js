import "./comingsoon.scss"
export const ComingSoon = ({imageSrc}) =>{

    return(
<div>
    <div className="image-container">
        <img src={imageSrc} alt="" />
        
    </div>
    <span className="comingSpan d-none d-md-block text-center">Coming Soon</span>
    
</div>

    )
}