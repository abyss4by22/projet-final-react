import {  FiFacebook} from 'react-icons/fi';
import {  AiOutlineInstagram} from 'react-icons/ai';
import {  FaPinterest} from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import {  FaYoutube} from 'react-icons/fa';
import "./footer.scss"

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='tarf text-center'>
                <h4>Get in touch</h4>
                <p className='text-center'>got any questions? send us a msg at Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ut culpa, veritatis quidem porro ipsum?</p>
               <div className='footer-icons d-flex justify-content-evenly w-75'> <FiFacebook/> <AiOutlineInstagram/> <FaPinterest/> <FaSnapchat/> <FaYoutube/>        </div>
            </div>
            <div className='tarf '>
                <h4>links</h4>
                <a href="#">search</a>
                <a href="#">about us</a>
                <a href="#">contact us</a>
                <a href="#">returns</a>
            </div>
            <div className='tarf'>
                <h4>links</h4>
                <a href="#">search</a>
                <a href="#">about us</a>
                <a href="#">contact us</a>
                <a href="#">returns</a>
            </div>

            

        </div>
    )
}