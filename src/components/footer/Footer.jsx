import React from "react";
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

export const Footer = () =>{
    return(
        <div className="container-fluid py-5 footer">
            <h3 className="text-center">sunnyside</h3>
            <div className="row">
                <div className="col text-center ">
                    <p className="footer">
                        <a href="#" className="text-decoration-none text-dark ">About</a>
                        <a href="#" className="text-decoration-none text-dark mx-3 ">Services</a>
                        <a href="#" className="text-decoration-none text-dark ">Projects</a>
                    </p>
                    <div>
                        <BsFacebook className="fs-4"/>
                        <AiFillInstagram className="fs-3 mx-2" />
                        <AiFillTwitterCircle className="fs-4" />
                        <BsPinterest className="fs-4 ms-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}