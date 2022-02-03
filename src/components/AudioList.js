import React, { useState, useEffect} from 'react';
import { FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MusicPlayer } from './MusicPlayer';
import { Songs } from './Songs';

function AudioList() {
    const [songs,setSongs] = useState (Songs);
    const [song, setSong] = useState (songs[0].song);
    const [img, setImage] = useState (songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll(".songs");
    
        function changeMenuActive(){
            songs.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
    
        songs.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);

    const changefavourite = (id) => {
        Songs.forEach((song) => {
                if (song.id == id) {
                    song.favourite = !song.favourite;
                }
            });

            setSongs([...Songs]);  
    };

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);

    }

  return ( 
    <div className='AudioList'>
           <h2 className='Title'>
            The list <span>10 songs</span>
           </h2>

           <div className='SongsContainer'>
               {Songs &&
               
               Songs.map((song,index) => (
          
                
               
           <div className='Songs' key={song?.id}
               onClick = {() => setMainSong(song?.song, song?.imgSrc)}>
           <div className='cout'>{song?.id}</div>
           <div className='Song'>
           <div className='ImgBox'>
               <img src={song?.imgSrc} alt="" />
           </div>

           <div className='Section'>
           <p className='SongName'>
              {
                  song?.songName
              }
               <span className='SpanArtist'>{song?.artist}</span>

           </p>
           <div className='Hits'>
           

               <p className='Duration'>
                   <i><FaRegClock /></i>
                  {
                      song?.duration
                  }
               </p>

               <div className='Favourite'
               onClick={() => changefavourite(song?.id)}>

                   { song?.favourite ?(
                       <i>
                       <FaHeart/>
                       </i>
                   ) : (
                       
                   <i>
                   <FaRegHeart/>
                   </i>
                   )

                   }
                 
                   
               </div>
           </div>
           </div>
           </div>
           </div>
           ))}
           
        
           </div>
           <MusicPlayer song={song} imgSrc={img}/>
    </div>
  );
}

export  {AudioList};
