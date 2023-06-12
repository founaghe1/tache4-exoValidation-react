import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Head } from "../head/Head";

export const Header = () =>{
    return(
        <div className="header">
            <div className="navbarDiv">

                <nav class="navbar navbar-expand-lg fixed-top ">
                    <div class="container-fluid mx-md-5">
                        <a class="navbar-brand text-light fw-bold" href="#">sunnyside</a>
                        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                            <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>

                        </button>

                        <div class="collapse navbar-collapse " id="navbarSupportedContent">

                            <ul class="navbar-nav ms-md-auto mb-2 mb-lg-0 ">
                                <li class="nav-item mx-md-3">
                                <a class="nav-link active text-light" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link text-light" href="#">Services</a>
                                </li>
                                <li class="nav-item mx-md-3">
                                <a class="nav-link text-light" href="#">Projects</a>
                                </li>

                                <form class="" role="search">
                                <button class="btn btn-outline-light rounded-5 px-4" type="submit">Contact</button>
                                </form>
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>

            </div>
            <Head />
        </div>
        
    )    
}