import React  from 'react'
import "./App.css"
import logo from './logo2.svg';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
export default function Navbar() {

        return (
        <>
            <div className="container">
            <div className="navbar"><Link to="/"><img src={logo} className="App-Logo" alt="logo" /></Link>
                <div>
                    <ul className="nav-links">
                        <li>
                        <Link to ="/">Inicio</Link>
                        </li>
                        <li>
                        <Link to="/Rooms">Diseño web</Link>
                        </li>
                        <li>
                        <Link to="/Rooms">Blog</Link>
                        </li>
                        <li>
                        <Link to="/Rooms">Contact</Link>
                        </li>
                    </ul> 
                </div>
            </div>
            </div>
                    </>
        );
    }





