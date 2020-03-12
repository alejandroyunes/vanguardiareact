import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



export default function TextDetails() {
  return (
    
      <ThemeProvider >
          <div className="center-content">
            <Typography variant="h2" className="main-title">Let's talk product.</Typography>
          </div>
          <div className="center-content"> 
          <Typography variant="p" className="main-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Typography>
          </div>
          
      </ThemeProvider>
  
  );
}
