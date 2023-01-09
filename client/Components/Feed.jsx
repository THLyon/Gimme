import React, {useEffect} from 'react'; 
import  '../styling/Feed.styles.css';
import { Tweet } from "react-twitter-widgets";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './widgets.js'

const Feed = () => {
 
 /*
    ! workaround for twitter timeline;
        * added widget.js file with all embedded code from widget link
        *removed cdn from widget link in embeded code
        *imported widget file into feed module and created new source in jsx element
        *added scroll functionality to div
 */ 


    return(
        <div className = 'feed-div'>
            <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/PGATOUR?ref_src=twsrc%5Etfw">Tweets by PGATOUR</a> <script async src="widjets.js" charset="utf-8"></script>    
            {/* <TwitterTimelineEmbed
                sourceType="profile"
                screenName="PGATOUR"
                options={{height: 400}}
                onComplete={action}
            /> */}
         </div>
    )
}

export default Feed; 