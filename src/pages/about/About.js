import React from "react";
import "./about.scss"
import hanger from "../../assets/images/aboutbg.jpg"

export const About = () => {
  return (
    <>
    <div>
    <section className="bg-about d-flex justify-content-center align-items-center text-white ">
<h1>About</h1>
</section>
{/* content */}
<section className="main-parent d-flex gap-2 m-2">
<div className="img-parent d-flex justify-content-end">
  <img src={hanger} alt="" />
</div>

<div className="about-parent">
  <h3>about us</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quasi facere eaque molestiae, iste repudiandae voluptas, quo, aliquid voluptates dignissimos impedit nam dolor! Iste possimus optio sapiente sed dolores aspernatur cupiditate ad, reprehenderit perspiciatis dolore rem laudantium, soluta id hic, labore rerum? Fuga, sequi! Illum ut debitis inventore numquam eius quam soluta enim repellat dolorum, deleniti similique quod iste odit atque modi nemo maiores maxime asperiores pariatur quasi minus harum?
  </p>

  <p className="ms-2 ps-2 border-start border-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur magni cumque reiciendis aliquid eum deserunt magnam ullam beatae. Repellat, quo.</p>
<span className="text-black"> Steve jobs</span>
</div>
</section>

     </div>
    </>
  );
};
