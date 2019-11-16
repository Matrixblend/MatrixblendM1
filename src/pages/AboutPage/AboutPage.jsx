import React from "react"
// import get from 'lodash/get';
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { graphql } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
// import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
// import SEO from 'components/Header/SEO/SEO.jsx';
import videoSrc from "../../assets/videos/logoVideo.mp4"
// import {data} from "./pageComp.jsx";
// import Blog from 'components/Blog/Blog.jsx';
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

import aboutStyle from "assets/jss/material-kit-react/views/AboutPage.jsx"

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    //  const html = <h1>{siteUrl}</h1>

    return (
      <div>
        <Header
          brand="Matrixblend Media"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparant"
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
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridItem md={12} className={classes.textCenter}>
            <GridItem>
              <h1>About Us </h1>
            </GridItem>
          </GridItem>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(aboutStyle)(AboutPage)

export const query = graphql`
  query aboutus {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            description
          }
        }
      }
    }
  }
`
