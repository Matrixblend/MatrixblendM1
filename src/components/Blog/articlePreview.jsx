import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/Blog-kit/article-preview.jsx"

function Blog({ article }) {
  ;<div>
    <Img alt="" sizes={article.heroImage.sizes} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
}
export default withStyles(styles)(Blog)
