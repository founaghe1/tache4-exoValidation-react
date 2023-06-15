import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import milke from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../assets/images/desktop/image-gallery-orange.jpg';
import riko from '../../assets/images/desktop/image-gallery-cone.jpg';
import suga from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () =>{


    // unitialisation de Aos
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-md-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <img src={milke} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <img src={orange} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <img src={riko} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <img src={suga} alt="" className="w-100"/>
                </div>
            </div>
        </div>
    )
}