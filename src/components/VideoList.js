import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos, onVideoSelect })=>{   
//return <div> {props.videos.length}</div> //with props in previous line

const renderedList = videos.map((video)=>{
        return <VideoItem 
                        key={video.id.videoId} 
                        video={video} 
                        onVideoSelect={onVideoSelect} />;
});
return <div className="ui relaxed divided list"> {renderedList}</div>
};

export default VideoList;
