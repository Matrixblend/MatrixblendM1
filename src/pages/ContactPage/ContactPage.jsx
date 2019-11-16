import React from "react"
// import get from 'lodash/get';
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { graphql } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import InputAdornment from "@material-ui/core/InputAdornment"

import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
// import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
// import videoSrc from '../../assets/videos/logoVideo.mp4';
import Email from "@material-ui/icons/Email"
import People from "@material-ui/icons/People"
import LockOutlined from "@material-ui/icons/LockOutlined"
// React icons
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa"
// core components

import GridContainer from "components/Grid/GridContainer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import CustomInput from "components/CustomInput/CustomInput.jsx"

// import mblendStyle from "assets/jss/material-kit-react/views/ContactPage/contactPage.jsx";
import mblendStyle from "assets/jss/material-kit-react/views/loginPage.jsx"
import image from "assets/img/bg7.jpg"

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carAnimaton: "cardHidden",
    }
  }

  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          brand="Matrixblend Media"
          rightLinks={<HeaderLinks />}
          fixed
          color="white"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        {/* <Parallax video="test">
        <video  width="100%"height="703" autoPlay  className={classes.textCenter}>
                  <source  src={videoSrc} type="video/mp4" />
                 </video>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                
                  <h1 className={classes.title}>Matrixblend Media.</h1>
                  <h3 className={classes.subtitle}>
                   Influence Inspiration, insight, and ideas.
                  </h3>
                  
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax> */}
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="warning" className={classes.cardHeader}>
                      <h4>Contact Us</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaTwitter />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaFacebook />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaGooglePlusG />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>
                      Every super hero has a wingman and we are no different.
                      Let's is know what is on your mind.{" "}
                    </p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    )
  }
}

export default withStyles(mblendStyle)(ContactPage)
