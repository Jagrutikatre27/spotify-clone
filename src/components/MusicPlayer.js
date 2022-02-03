import React, {useState, useRef, useEffect} from 'react';
import '../styles/MusicPlayer.css';

import {FaRegHeart,FaHeart, FaStepBackward,FaBackward,  FaForward, 
    FaStepForward, FaShareAlt } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs';
import {IoPlayCircle, IoPauseCircle} from 'react-icons/io5';

function MusicPlayer({song, imgSrc }) {
console.log(song);
    const [isLove, setLoved] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [duration, setduration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setduration(seconds);
        progressBar.current.max = seconds;
    }, [
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState

    ]);

    const changePlayPause = () => {
        const prevValue = isPlaying;   
        setPlaying(!prevValue);
         if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
};

const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
};

 const calculateTime = (sec) => {
     const minutes = Math.floor(sec / 60);
     const returnMin = minutes <10 ? `0${minutes}` :`${minutes}`;

     const seconds = Math.floor(sec % 60);
     const returnsec = seconds <10 ? `0${seconds}` :`${seconds}`;

     return `${returnMin} : ${returnsec}`;
 };



 const changeProgress = () => {
     audioPlayer.current.currentTime = progressBar.current.value;
     changeCurrentTime();
 };

 const changeCurrentTime = () => {
    progressBar.current.style.setProperty('--played-width', 
    `${(progressBar.current.value/ duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
 };

    const changeLoved=() => {
        setLoved(!isLove);
       
    };
  return (
  <div className= 'MusicPlayer'>
  <div className= 'SongImage'>
      <img src={imgSrc} alt=''/>
  </div>
  <div className= 'SongAttributes'>
      <audio src={song} preload='metadata' ref={audioPlayer}/>

      <div className='top'>
      <div className='left'>
      <div className='loved' onClick={changeLoved}>  
         {isLove? (
         <i>
              <FaHeart/>
             </i>
         ) : (
            <i>
            <FaRegHeart/>
            </i>
         )}
      </div>
      <div className= 'download'>
          <i>
              <BsDownload/>
          </i>
      </div>

      </div>
      <div className= 'middle'>
      <div className= 'back'>
          <i>
              <FaStepBackward className='backward'/>
          </i>
          <i>
              <FaBackward/>
          </i>
      </div>
      <div className= 'playPause' onClick={changePlayPause}>
          {isPlaying? (
              <i>
              <IoPauseCircle/>
          </i>
          ) : (
            <i>
            <IoPlayCircle/>
        </i>
          )}
           
      </div>
      <div className= 'forward'>
          <i>
              <FaForward className='next'/>
          </i>
          <i>
              <FaStepForward/>
          </i>

      </div>
      </div>

      <div className= 'right'>
          <i>
              <FaShareAlt/>
          </i>
      </div>
  </div>
  <div className= 'bottom'>
  <div className= 'curretTime'>{calculateTime(currentTime)}</div> 
  <input type='range' className='progressBar' ref={progressBar} defaultValue='0' 
  onChange={changeProgress} />
  <div className= 'duration'>
      {
          duration && !isNaN(duration) && calculateTime(duration)
          ? duration && !isNaN(duration) && calculateTime(duration)
          : "00:00"
      }
      </div> 
  </div>
  </div>
  </div>
  );
}

export  {MusicPlayer};
