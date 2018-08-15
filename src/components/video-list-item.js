import React from 'react';
import './video-list-item.css'

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
      <li className="list-group-item" onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL}/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
  )
};

// import React from 'react'
// import './video-list-item.css'

// export default ({video, onVideoSelect}) => {
//     const imageURL = video.snippet.thumbnails.default.url;
//     return (
//         <li onClick={()=>onVideoSelect(video)} className="list-group-item">
//             <div className="video-list media">
//                 <div className="media-left">
//                     <img className="media-object" src={imageURL}/>
//                 </div>
//                 <div className="media-body">
//                     <div className="media-heading">
//                         {video.snippet.title}
//                     </div>
//                 </div>
//             </div>
//         </li>
//     )
// }

export default VideoListItem;