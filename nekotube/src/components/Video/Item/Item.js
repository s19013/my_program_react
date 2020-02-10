import React from 'react';
// import './Item.css'

const Item = (props) => {
  // console.log("this gat props");
  // console.log(props.video);
  return(
    <li className="list-group-item"
      onClick={() => props.onVideoClicked(props.video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="mr-3" src={props.video.snippet.thumbnails.default.url}/>
        </div>
      </div>
      <div className="media-body">
        <h5 className="media-heading">{props.video.snippet.title}</h5>
      </div>
    </li>
  )
}

export default Item
