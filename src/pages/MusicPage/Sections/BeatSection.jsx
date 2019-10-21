import React from "react";
// @material-ui/core components
import AwesomeFonts from '@fortawesome/fontawesome-svg-core';
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Player from 'components/Player/Player.jsx';

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        {/* <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
          
            <h2 className={classes.title}>Let's find your golden nuggets.</h2>
            <h5 className={classes.description}>
             You are a product. You are what creates your world
             so why not follow already written path to results.Get access to all the tools needed for musicial chrisma.
            </h5>
          </GridItem>
        </GridContainer> */}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Music Expressions. </h2>
            <h5 className={classes.description}>
             <Player />
            </h5>
          </GridItem>
        </GridContainer>
        <div>
        
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
