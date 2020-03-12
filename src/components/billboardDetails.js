import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginRight: '30px',

    }
  });

export default function ResponsiveFontSizes() {
    const classes = useStyles();
  return (
    
      <ThemeProvider theme={theme}>
                <div className="center-content-vertically">
                    <div className="default-padding">
                    <Typography variant="h3" className="main-grid">Your Story Starts With Us.</Typography>
                    </div>
                </div>

                <div className="default-padding">
                <Button className={classes.root}>
                Inicio
                </Button>
            
            <Button className={classes.root}>
                Segundo
            </Button>
                </div>
        
      </ThemeProvider>
  
  );
}