import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(){


    return(
        <>
             <div className="dropdown-center">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    React Programm 
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/"> --Select-- </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/prime"> Prime Number </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/palimdrome"> Palimdrome </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/Leapyear"> Leap Year </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/Mathtable"> Math Table </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/Reversestring"> Reverse String </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/Fullpiramid"> Full Piramid </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/MejorityElement"> Mejority Element </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" aria-current="page" to="/SinglePyramid"> Single Pyramid </Link>
                    </li>
                </ul>
                </div>
        </>
    );
}