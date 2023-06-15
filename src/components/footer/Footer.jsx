import React from "react";
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () =>{


    useEffect(() => {
        AOS.init();
    }, []);


    return(
        <div className="container-fluid py-5 footer" data-aos="zoom-in" data-aos-duration="2000">
            <h3 className="text-center">sunnyside</h3>
            <div className="row">
                <div className="col text-center ">
                    <div className="footerdiv mb-4">
                        <a href="#" className="text-decoration-none text-dark al">About</a>
                        <a href="#" className="text-decoration-none text-dark mx-3 al">Services</a>
                        <a href="#" className="text-decoration-none text-dark al">Projects</a>
                    </div>
                    <div>
                        <BsFacebook className="fs-4 fb"/>
                        <AiFillInstagram className="fs-3 mx-2 insta" />
                        <AiFillTwitterCircle className="fs-4 twiter" />
                        <BsPinterest className="fs-4 ms-2 pint" />
                    </div>
                </div>
            </div>
        </div>
    )
}