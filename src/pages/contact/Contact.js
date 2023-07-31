import "./contact.scss"

export const Contact = () =>{

    return(
        <>
        <div className="parentContact">

<section className="bg-contact d-flex justify-content-center align-items-center text-white ">
<h1>Contact</h1>

</section>
<section className="contactMain d-flex gap-2 align-items-center justify-content-center mb-3">
<div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26594.860686998003!2d-7.656619267571538!3d33.570063743873945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e9854fbd49%3A0xcb8dc82bd8575005!2sMa%C3%A2rif%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1690384567500!5m2!1sen!2sma"
      width="100%"
      height="420"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="mt-2 "
    ></iframe>
  </div>

  <div className=" inputsContact d-flex flex-column gap-1">
    <h3>Send us your message</h3>
    <input className="input" type="text" placeholder="  Full Name" />
    <input className="input" type="text" placeholder="  Phone Number" />
    <input className="input" type="email" placeholder="  Email Address" />
    <textarea  className="messageinput" placeholder="  Message" id="message " name="message" required></textarea>
    <div className="d-flex justify-content-center">
    <button className="sendbtnContact rounded-pill w-25 btn-danger btn ">Send</button>
    </div>    

  </div>

</section>











        </div>
        </>
    )
}