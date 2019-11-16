import React from "react"
// import get from 'lodash/get';
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
// import { graphql, staticQuery } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import BeatSection from "./Sections/BeatSection.jsx"
import videoSrc from "../../assets/videos/logoVideo.mp4"
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
// import SectionTypography from "./Sections/SectionTypography.jsx";
// import SectionJavascript from "./Sections/SectionJavascript.jsx";
// import SectionCarousel from "./Sections/SectionCarousel.jsx";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
// import SectionLogin from "./Sections/SectionLogin.jsx";
// import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";

import mblendStyle from "assets/jss/material-kit-react/views/matrixPage.jsx"

class MatrixPage extends React.Component {
  render() {
    const siteTitle = "Matrixblend Media"
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          brand={siteTitle}
          rightLinks={<HeaderLinks />}
          fixed
          color="white"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax video="test">
          <video
            width="100%"
            height="703"
            autoPlay
            className={classes.textCenter}
          >
            <source src={videoSrc} type="video/mp4" />
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
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridItem md={12} className={classes.textCenter}>
            <BeatSection />

            <GridItem>{/* <h1> Blog section</h1> */}</GridItem>
          </GridItem>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(mblendStyle)(MatrixPage)
