import React, { useState } from "react";
import ArrayCarrossel from "../../assets/teste";
import "./CardCarousel.css";
import YouTube from "react-youtube";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const Menu = () => {
  const [data, setData] = useState([...ArrayCarrossel]);
  const [opts, setOpts] = useState({
    height: window.innerHeight * 0.3,
    width: window.innerWidth * 0.3,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      rel: 0,
      fs: 0,
      autoplay: 1,
      modestbranding: 1
    }
    
  });

  console.log(opts)
  console.log(data)


  const onReady = event => {
    event.target.pauseVideo();
  const onReadyVideo = event => {
    event.target.setVolume(0);
  };

  const pegaClick = (evento, i, data) => {
      let banana = i;

      let date = data;

      let xuxu;
      
      console.log('este sou eu',date)

      console.log('fui clicado', banana)
      
     date.map=((e,index) => {
       console.log('eu aqui de novo')
      if( index ===  banana){
        console.log(i)
        xuxu({
          height:'800',
          width:'670',             
          playerVars: {
         autoplay: 1,      
         modestbranding: 1,
         rel:0,
         playsinline:0
       }

      })  
      console.log(opts)
    } 
       
  })

  return <link to='/video' />
       
  }
  
  
  return (
    <>    
      <div className="content">
        <div className="content-container">
          <section className="container">
            {data.map((e, i) => (
              <section key={i} className="item">                
                <YouTube
                  videoId={e.link}
                  opts={opts}
                  onReady = { onReadyVideo }
                ></YouTube>
                <div id={e.title} className='sobrepoe' onClick={
                  (event) => pegaClick(event.target, i, data)}></div>                
              </section>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Menu;
