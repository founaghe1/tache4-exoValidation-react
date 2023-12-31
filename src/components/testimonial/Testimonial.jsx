import React from "react";
import emily from '../../assets/images/image-emily.jpg'
import thomas from '../../assets/images/image-thomas.jpg'
import jennie from '../../assets/images/image-jennie.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Testimonial = () =>{


    // unitialisation de Aos
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <div className="container testimo">
            <div className="row my-5">
                <h3 className="text-center my-5 h3testi" data-aos="zoom-in">CLIENT TESTIMONIALS</h3>
                <div className="col-md-4">
                    <div className="emily text-center">
                        <p className="text-center" data-aos="zoom-in"><img src={emily} alt="" /></p>
                        
                        <p data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam eligendi eum quisquam illo dolores eaque quis ipsa cupiditate dignissimos, culpa nisi vitae nam iste.</p>
                        <div className="divEmily mt-5" data-aos="zoom-in">
                            <p className="fw-bold">Emily R.</p>
                            <p className="fw-bold emilyMarket">Marketing Director</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="emily text-center">
                        <p className="text-center" data-aos="zoom-in"><img src={thomas} alt="" /></p>
                        
                        <p data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam eligendi eum quisquam illo dolores eaque quis ipsa cupiditate dignissimos, culpa nisi vitae nam iste.</p>
                        <div className="divEmily mt-5" data-aos="zoom-in">
                            <p className="fw-bold">Thomas S.</p>
                            <p className="fw-bold emilyMarket">Chief operating officer</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="emily text-center">
                        <p className="text-center" data-aos="zoom-in"><img src={jennie} alt="" /></p>
                        
                        <p data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam eligendi eum quisquam illo dolores eaque quis ipsa cupiditate dignissimos, culpa nisi vitae nam iste.</p>
                        <div className="divEmily mt-5" data-aos="zoom-in">
                            <p className="fw-bold">Jennie F.</p>
                            <p className="fw-bold emilyMarket">Business Owner</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}