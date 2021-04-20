import React from 'react';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>

            </div>
            <hr />

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwngoPpLmQdBbBD-3FGswobo8lNq8-lO51EaBBiuRUg=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Shawn Mendes"
            verified
            subs="27.5M"
            noOfVideos="255"
            description="“Wonder” the album out now "
            />

            <hr/>

            <VideoRow
             views="68M"
             subs="27.5"
             description="whats up guys!tweet me!" 
             timestamp="3 months ago"
             channel="Shawn Mendes"
             title="Shawn Mendes-Wonder"
             image="https://i.ytimg.com/an_webp/fHeQemJJQII/mqdefault_6s.webp?du=3000&sqp=CM7X5IAG&rs=AOn4CLBHuYofeqII0KjkRP1aG8-MP7mztw"
             />

            <VideoRow
             views="2B"
             subs="27.5M"
             description="Listen ad-free with YouTube Premium
             Song
             Treat You Better
             Artist
             Shawn Mendes
             " 
             timestamp="Jul 13, 20"
             channel="Shawn Mendes"
             title="Shawn Mendes - Treat You Better"
             image="https://i.ytimg.com/an_webp/lY2yjAdbvdQ/mqdefault_6s.webp?du=3000&sqp=COzA5IAG&rs=AOn4CLC6D_7odZjEUlS_Zs1H5AI6Mg48rg"
             />

            <VideoRow
             views="68M"
             subs="27.5"
             description="whats up guys!tweet me!" 
             timestamp="3 months ago"
             channel="Shawn Mendes"
             title="Shawn Mendes-Wonder"
             image="https://i.ytimg.com/an_webp/fHeQemJJQII/mqdefault_6s.webp?du=3000&sqp=CM7X5IAG&rs=AOn4CLBHuYofeqII0KjkRP1aG8-MP7mztw"
             />

            <VideoRow
             views="68M"
             subs="27.5"
             description="whats up guys!tweet me!" 
             timestamp="3 months ago"
             channel="Shawn Mendes"
             title="Shawn Mendes-Wonder"
             image="https://i.ytimg.com/an_webp/fHeQemJJQII/mqdefault_6s.webp?du=3000&sqp=CM7X5IAG&rs=AOn4CLBHuYofeqII0KjkRP1aG8-MP7mztw"
             />

            
        </div>
    
    );
}

export default SearchPage;
