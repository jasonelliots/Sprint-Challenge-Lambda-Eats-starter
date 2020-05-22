import React from "react";
import { Link } from 'react-router-dom'; 

import pizza from './pizza.jpg'

export default function Homepage(){

    return (

        <>
        
        <Link to="/pizza">
            <h1>MAKE YO PIZZA</h1>
        </Link>

        <img src={pizza} alt='goofymovie'/>


        </>

    )

}