import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import milke from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../assets/images/desktop/image-gallery-orange.jpg';
import riko from '../../assets/images/desktop/image-gallery-cone.jpg';
import suga from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';

export const Projects = () =>{
    return(
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-md-3 col-sm-6">
                    <img src={milke} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={orange} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={riko} alt="" className="w-100"/>
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={suga} alt="" className="w-100"/>
                </div>
            </div>
        </div>
    )
}