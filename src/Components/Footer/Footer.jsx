import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
//imported images=======>
import Logo from '../../assets/logo.png'
//imported icons=======>
import { TiSocialFacebook } from "react-icons/ti"
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'


const Footer = () => {

  //useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className='Logo'/>
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterestP className='icon' />

          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Home</a></li>
          <li><a href="">Explore</a></li>
          <li><a href="">Flight Status</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Check-In</a></li>
          <li><a href="">Manage your booking</a></li>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li><a href="">FAQ</a></li>
          <li><a href="">How to</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Baggage</a></li>
          <li><a href="">Route Map</a></li>
          <li><a href="">Our communities</a></li>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Chauffuer</a></li>
          <li><a href="">Our Partners</a></li>
          <li><a href="">Destination</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Transportation</a></li>
          <li><a href="">Programme Rules</a></li>
        </div>
      </div>
      <div className="copyRightDiv flex">
        <p>&copy;copyright Courtesy Design | Inspired from <a href="http://emailto-isratech8@outlook.com" target='_blank'>IsraTech</a> </p>
        <p> Developed by <a href="http://emailto-jrsonnaz@gmail.com" target='_blank'>SammyJs</a> </p>

      </div>
    </div>
  )
}

export default Footer