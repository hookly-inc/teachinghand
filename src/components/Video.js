import React from 'react';

const Video = (props) => {
  return(
      <iframe title='video' className='video' src={`https://www.youtube.com/embed/${props.video}?autoplay=1&color=white&controls=2&iv_load_policy=3&loop=1&modestbranding=1&rel=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default Video;