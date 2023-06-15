import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  oeuf  from '../../assets/images/desktop/image-transform.jpg'
import cup from '../../assets/images/desktop/image-stand-out.jpg'
import raisin from '../../assets/images/desktop/image-graphic-design.jpg'
import orange from '../../assets/images/desktop/image-photography.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const FirstSection = () => {

    // Unitialisation de Aos
    useEffect(() => {
        AOS.init();
      }, []);


    return(
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-md-center my-5 my-md-0" data-aos="zoom-in">
                    <div className="w-75">
                        <h1>Transform your brand</h1>
                        <p className="my-lg-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dignissimos accusantium! Eius illum eveniet perferendis obcaecati quos? </p>
                        <p className="fw-bold"><a href="#" className="text-dark learnMore1">LEARN MORE</a></p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12" data-aos="flip-up">
                    <div>
                        <img src={oeuf} alt="" className="w-100"/>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-6 col-sm-12" data-aos="flip-up">
                    <div>
                        <img src={cup} alt="" className="w-100"/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-md-center my-5 my-md-0" data-aos="zoom-in">
                    <div className="w-75">
                    <h1>Transform your brand</h1>
                        <p className="my-lg-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dignissimos accusantium! Eius illum eveniet perferendis obcaecati quos? </p>
                        <p className="fw-bold"><a href="#" className="text-dark learnMore2">LEARN MORE</a></p>
                    </div>
                </div>
            </div>

            <div className="row g-0">
                <div className="col-md-6 col-sm-12 position-relative" data-aos="flip-up">
                    <div className="position-relative">
                        <img src={raisin} alt="" className="w-100 position-absolute"/>
                        <div className="graphDesi position-absolute d-flex justify-content-center">
                            <div className="text-center w-75 ">
                                <h3 className="">Graphic Design</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum vero iste id pariatur tempora consectetur corporis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 position-relative colPhoto" data-aos="flip-up">
                    <div className="position-relative">
                        <img src={orange} alt="" className="w-100 position-absolute"/>
                        <div className="photographique position-absolute d-flex justify-content-center">
                            <div className="text-center w-75 ">
                                <h3 className="">Graphic Design</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum vero iste id pariatur tempora consectetur corporis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

