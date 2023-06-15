import React from "react";
import './Head.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Head = () =>{

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="head d-flex flex-column align-items-center py-5" data-aos="zoom-in-up">
            <h2 className="my-5 text-light" data-aos="zoom-in">WE ARE CREATIVES</h2>
            <p className="mb-5 py-5 arrow" data-aos="zoom-in"><svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg></p>
        </div>
    )
}