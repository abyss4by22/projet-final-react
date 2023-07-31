import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import "./navigation.scss"
import {  AiOutlineHeart} from 'react-icons/ai';
import {PiBasketThin  } from 'react-icons/pi';
import {FaBars  } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <nav className="d-flex justify-content-lg-evenly justify-content-between align-items-center nav">
        <div>
        <p className="h2 fw-bold mx-2">V01D <span className="text-danger">.</span></p>
        </div>
        <ul className="menu d-none d-lg-flex">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="heartnBasket d-none d-lg-flex">
            <li>
            <AiOutlineHeart className="text-danger fs-3"/>
            </li>
            <li>
            <PiBasketThin className="fs-3"/>
            </li>
        </ul>
        <FaBars className="d-block d-lg-none fs-4 mx-0 mx-md-2"/>
      </nav>
    )
}
