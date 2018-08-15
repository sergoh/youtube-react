import React from 'react'
import VideoListItem from './video-list-item'
import './video-list.css'

export default (props) => {
  return (
      <ul className="col-md-4 list-group">
        {props.videos.map(video =>
            <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>
        )}
      </ul>
  )
}