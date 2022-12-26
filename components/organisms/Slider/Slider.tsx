import styles from "./Slider.module.scss";
import Slide, { SlideProp } from "../Slide/Slide";
import React from "react";

interface SliderProps
{
    slides: Array<SlideProp>
}

const Slider = ({slides}: SliderProps) => 
{
    return ( 
        <div className={styles.slider}>
            {slides.map((slider) => 
            {
                return <Slide 
                            key={slider.name}
                            img = {slider.img} 
                            name = {slider.name} 
                            startDate={slider.startDate} 
                            endDate={slider.endDate} 
                            projectDetails={slider.projectDetails} 
                        />   
            })}
        </div>
     );
}
 
export default Slider;