import React from "react"
// import get from 'lodash/get';
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
// import { Link } from "gatsby";
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
import ProductSection from "./Sections/ProductSection.jsx"
import { Helmet } from "react-helmet"
// import Phone from "components/Phone/Phone.jsx";
// import ArticlePreview from "./Sections/ArticlePreviewSection.jsx";
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
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Matrixblend Media | Influence | Inspiration| insight | and ideas.
          </title>
        </Helmet>
        <Parallax video="test" image={require("assets/img/light-bulb.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Matrixblend Media.</h1>
                  <h3 className={classes.subtitle}>
                    Influence Inspiration, insight, and ideas.
                    {/* <Phone /> */}
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridItem md={12} className={classes.textCenter}></GridItem>
          {/* <ArticlePreview /> */}
          <ProductSection />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(mblendStyle)(MatrixPage)
