import React from "react";
import ResponsiveDesignIcon from '../../images/responsive-design-icon.svg'
import MobileDesignIcon from '../../images/mobile-design-icon.svg'
import SeoDesignIcon from '../../images/seo-design-icon.svg'

export default function MainColumns() {
  return (
    <>

      <div className="showcase__content">
        

        <div className="flex-container">
         <div className="flex-item">
          <div>
          <img src={ResponsiveDesignIcon} />
          </div>
         <h2>
             Responsive Design
         </h2>
         <br/>
         <p>Illustration Gallery</p>
         <br/>
         <p>Leading digital agency with solid design and development expertise. We build mobile and web products for startups and design intricate trading platforms.</p>
         
          <p>view more</p>
         </div>
         <div className="flex-item">
         <div style={{width: '100px', margin: ' 0 auto'}}>
         <img src={MobileDesignIcon} />
         </div>
         <h2>
             Responsive Design
         </h2>
         <br/>
         <p>Illustration Gallery</p>
         <br/>
         <p>Leading digital agency with solid design and development expertise. We build mobile and web products for startups and design intricate trading platforms.</p>
         
          <p>view more</p>
         </div>
         <div className="flex-item">
         <div><img src={SeoDesignIcon} /></div>
         <h2>
             Responsive Design
         </h2>
         <br/>
         <p>Illustration Gallery</p>
         <br/>
         <p>Leading digital agency with solid design and development expertise. We build mobile and web products for startups and design intricate trading platforms.</p>
         
          <p>view more</p>
         </div>
         </div>
        

        

      </div>


     
      
    </>
  );
}
