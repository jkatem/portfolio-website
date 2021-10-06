import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'  

const Carousel = ({projects}) => {

    console.log(projects)

    const [current, setCurrent] = useState(0);
    const length = projects.length 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null 
    }

    console.log(nextSlide)

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' />           
        
            {SliderData.map((slide, index) => {
                return (
                    // console.log(slide)
                    <img src={slide.project} alt="test" />
                )
            })}
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </section>
    )
}

export default Carousel; 
