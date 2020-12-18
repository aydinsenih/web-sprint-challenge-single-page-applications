import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(){
    const history = useHistory()

    const routeToForm = () =>{
        history.push("/pizza")
    }

    return(
        <div className="container">
            <img src="../Assets/Pizza.jpg" alt="pizza"/>
            <button onClick={routeToForm} id="orderButton">Order Now</button>
        </div>
    )
}