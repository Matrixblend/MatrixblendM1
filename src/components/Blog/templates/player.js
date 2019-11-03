import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'



class PlayerTemplate extends React.Component {

  render (){

    const Player = ({ videoSrcURL, videoTitle, storeId, scrolling }) =>(
 
      <iframe
          src='https://player.beatstars.com/?storeId=102462'
          scrolling="no" 
          width="100%" 
          height="800" 
          style="max-width:1024px;"
          frameborder="0" 
          marginheight="0" 
          marginwidth="0"/>
    
    )
    return (
      <div>
        <h1>Download Tracks</h1>
        <iframe src='https://player.beatstars.com/?storeId=102462'
          scrolling="no" 
          width="100%" 
          height="800" 
          // style="max-width:1024px;"
           frameborder="0" 
           marginheight="0" 
          // marginwidth="0"
          />
      </div>
    )
    

  }
}

export default PlayerTemplate

