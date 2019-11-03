/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticQuery, graphql} from "gatsby";
import _ from "lodash"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
// import SEO from 'components/Header/SEO/SEO.jsx';
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const linkList = <StaticQuery
query={graphql`
query CategoryQuery {
  allMarkdownRemark(limit: 2000){
    group(field: frontmatter___tags){
      fieldValue
    }
  }
}
`}
render={data => {
 
return data.allMarkdownremark.group.map(g => {
  <Link to={`tags/${g.fieldValue}`} className={classes.dropdownLink}
  >
  {_.capitalize(g.fieldValue)}
</Link>
})
}}
/>

console.log(linkList.props)

function HeaderLinks({ ...props },{siteTitle}) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        
        <CustomDropdown
          noLiPadding
          buttonText="Categories"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
            
      />
      </ListItem>

    <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/music-page">Music</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/blog">Blog</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/about-us">About us</Link>
      </ListItem>
        
          
      
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.facebook.com/matrixblend"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}>
        
      <Button
            color="transparent"
            href="https://www.twitter.com/matrixblend"
            target="_blank"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
      </ListItem>
    </List>
  );
}


export default withStyles(headerLinksStyle)(HeaderLinks);