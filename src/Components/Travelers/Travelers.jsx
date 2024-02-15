import { useEffect } from 'react'

//Imported Destination Images======>
import paris from '../../assets/city/paris.jpg'
import newyork from '../../assets/city/newyork.jpg'
import london from '../../assets/city/london.jpg'
import dubai from '../../assets/city/dubai.jpg'

//Imported Traveler Images======>
import traveler1 from '../../assets/person/person1.jpg'
import traveler2 from '../../assets/person/person2.jpg'
import traveler3 from '../../assets/person/person3.jpg'
import traveler4 from '../../assets/person/person4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Travelers = () => {

  //useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  const travelers = [
    {
      id: 1,
      destinationImage: paris,
      travelerImage: traveler1,
      travelerName: 'Sammy_js',
      socialLink: '@jssammy',
      animationDuration: '2500'
    },
    {
      id: 1,
      destinationImage: dubai,
      travelerImage: traveler2,
      travelerName: 'John Doe',
      socialLink: '@johndoe'
    },
    {
      id: 1,
      destinationImage: newyork,
      travelerImage: traveler3,
      travelerName: 'Will Smith',
      socialLink: '@willsimth9'
    },
    {
      id: 1,
      destinationImage: london,
      travelerImage: traveler4,
      travelerName: 'Sarah Kasi',
      socialLink: '@kasisarah'
    },
  ]



  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month</h2>

        <div className="travelersContainer grid">
          {/* single passenger  card*/}
          {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
            return (<div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
              <img src={destinationImage} className='destinationImage' />
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage' />
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{socialLink}</p>
                </div>
              </div>
            </div>)
          })}


        </div>
      </div>
    </div>
  )
}

export default Travelers