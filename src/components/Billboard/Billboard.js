import React from "react";

import showcaseLogo from "../../images/cards-test.c1ff9b42.png";
import showcaseLogoTwo from "../../images/computer.png";

export default function Billboard() {
  return (
    <>
      <div className="showcase-content" >
        <div >
          <h1 style={{color: '#2bbacb'}}>
            Web </h1>
     
            <h1>SEO</h1>
     
   
            <h1 style={{color: '#2bbacb'}}>Desarrollo</h1>
            </div>
   
    
        <img src={showcaseLogoTwo} alt="vanguardia showcase" />
        
    </div>
    </>
  );
}
