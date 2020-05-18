import React from "react";

import Animation from "../animation";

export default function Billboard() {
  return (
    <>

      <div className="showcase__content">
        <div className="showcase__content__title">
          <h1 style={{ color: "#2bbacb" }}>
            we build <br /> amazing web experiences
          </h1>
        </div>

        <div className="showcase__content__svg">
          <Animation />
        </div>
      </div>

      <div className="showcase__content__two">
        <div className="showcase__content__two__text">
          <p>
            Leading digital agency with solid design and development expertise.
            We build mobile and web products for startups and design intricate
            trading platforms.
          </p>
          <div className="showcase__content__two__email">
              <input type="text" placeholder="Email address" name="mail" />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
      
    </>
  );
}
