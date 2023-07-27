import React from "react";
import "../../styles/modules/home/home.css"
import { ComingSoon } from "./components/ComingSoon";
import comingSoon1 from "../../assets/images/comingsoon1.jpg"
import comingSoon2 from "../../assets/images/comingsoon2.jpg"
import comingSoon3 from "../../assets/images/comingsoon3.jpg"
import { Header } from "./components/Header";
import { OurProducts } from "./components/OurProducts";
export const Home = () => {
  return (
    <>
    <Header/>
   <div className="comingSoon h-50 d-flex flex-column flex-md-row  justify-content-evenly">
<ComingSoon imageSrc= {comingSoon1}/>
<ComingSoon imageSrc= {comingSoon2}/>
<ComingSoon imageSrc= {comingSoon3}/>
   </div>
   <OurProducts/>
   </>
    
  );
};
