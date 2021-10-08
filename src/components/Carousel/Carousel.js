import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'  

const Carousel = ({projects}) => {

    // console.log(projects)

    const [current, setCurrent] = useState(0);
    const length = projects.length 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        // console.log(`I am prevSlide`)
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null 
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />           
        
            {SliderData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (<img src={slide.project} alt="test" />)}
                     
                    </div>                   
                )
            })}
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </section>
    )
}

export default Carousel; 
