import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

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
            <h2 className={classes.title}>Building your personal brand. </h2>
            <h5 className={classes.description}>
             Forward thinking strategies, earn you daily results
             from money making media plans, to build routines that will shape your niche.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="One on One Insights"
                description="Talk with a professional in the field you are entering, to gain routines and new mind sets."
                icon={VerifiedUser}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Access to our info Library"
                description="Dive into highly currated content from professionals in your field of interest."
                icon={ChatBubbleOutlineIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Self Identify"
                description="Sign up for our bi weekly emails, that will keep you inspired and filled with insight."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
