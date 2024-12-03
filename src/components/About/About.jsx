import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nursing Tomorrow's Leaders Today</h2>
        <p>A university is a prestigious institution of higher learning that provides students with 
            the opportunity to pursue advanced education and research. It offers a wide array of programs, 
            from undergraduate to postgraduate degrees, across various disciplines such as science, arts, engineering, 
            business, and medicine. Universities are not only centers of academic excellence but also hubs for innovation, 
            and intellectual growth.</p>
            <p>They provide state-of-the-art facilities like libraries, laboratories, and research centers, 
                enabling students and faculty to engage in meaningful scholarly pursuits.and community engagement, 
                universities play a pivotal role in shaping individuals and advancing society.</p>
        </div>
    </div>
  )
}

export default About