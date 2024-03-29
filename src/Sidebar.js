import React from 'react';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Treanding" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your vidoes" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        </div>
    );
}

export default Sidebar;
