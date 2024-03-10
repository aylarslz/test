import React from 'react'
import about_video_bg from '../../assets/img/about/about_video_bg.jpeg'
import about_wheel from '../../assets/img/about/about_wheel.png'

const Video = () => {
    const openVideo = () => {
        const videoUrl = 'https://www.youtube.com/watch?v=L6yX6Oxy_J8';
        const windowFeatures = 'resizable,width=600,height=400,top=200,left=200';
        const newWindow = window.open('', '_blank', windowFeatures);
        const videoHtml = `
          <video controls autoplay>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
        newWindow.document.write(videoHtml);
      };
  return (
    <>
    <div className="video-bg d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:`url(${about_video_bg})`}}>
        <a onClick={openVideo}><i className="fa-solid fa-play"></i></a>
        <img src={about_wheel} className='wheel' alt="" />
        <h1 className='text-center text-white fw-bold mt-4'>MAKE THE THING ANYTHING <br /> IS POSSIBLE</h1>
    </div>
    </>
  )
}

export default Video