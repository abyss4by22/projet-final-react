import "./header.scss"
export const Header = () =>{

    return(
      <section className="headerSection d-flex flex-column justify-content-evenly align-items-center mb-3">
<h1>clothes for your skin, you need it.</h1>
<span className="text-white fs-3">new "cool"lection</span>
<button className="btn bg-white rounded-pill">shop now</button>
      </section>
    )
}