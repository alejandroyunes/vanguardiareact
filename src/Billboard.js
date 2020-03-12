import React from 'react'
import "./App.css"
import BillboardDetails from './components/billboardDetails';


export default function Billboard() {

        return (
        <>
            <div className="billboard">
            <div className="billboard-container">
                <div>
                    <BillboardDetails/>
                </div>
            </div>
            </div>
                    </>
        );
    }
