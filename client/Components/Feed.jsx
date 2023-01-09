import React, {useEffect} from 'react'; 
import  '../styling/Feed.styles.css';
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Feed = () => {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://platform.twitter.com/widgets.js";
    //     document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    //   }, []);

    return(
        <div className = 'feed-div'>
            <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/PGATOUR?ref_src=twsrc%5Etfw">Tweets by PGATOUR</a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>    
         </div>
    )
}

export default Feed; 