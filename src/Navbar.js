import React  from 'react'
import "./sass/styles.css"
import logo from './logo2.svg';
import showcaseLogo from './images/cards-test.c1ff9b42.png'
import { Link } from 'react-router-dom';
export default function Navbar() {

        return (
        <>
        <header className="showcase">
            <div className="container">
                <nav>
                <Link to="/"><img src={logo} alt="logo" /></Link>     
                    <ul>
                        <li><Link to ="/">Inicio</Link></li>
                        <li><Link to="/About">Diseño web</Link></li>
                        <li><Link to="/Dashboard">Blog</Link></li>
                        <li><Link to="/Rooms">Contact</Link></li>
                    </ul> 
                </nav>

            <div className="showcase-content">
                <div>
                    <h1>Make Your Marketing Real</h1>
                    <p className="my-1">Lorem, ipsum dolro sit amet consectetur. Lorem, ipsum dolro sit amet consectetur, Lorem,  sit amet consectetur</p>
                    <a href="#" className="btn-primary">Learn more</a>
                    <a href="#" className="btn-secondary">Learn more</a>
                </div>
                <img src={showcaseLogo} alt="vanguardia showcase"></img>
            </div>
            </div>
        </header>
                    </>
        );
    }





