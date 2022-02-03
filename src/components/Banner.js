import React from 'react';
import '../styles/Banner.css';
import music from '../images/Model (1).jpg';
import {IoHeartCircleOutline, IoShareSocial} from 'react-icons/io5';
import { useDataLayerValue } from '../DataLayer';
import {Avatar} from '@material-ui/core';

function Banner() {
  const [{user}, dispatch] = useDataLayerValue();

  return(
     <div className='Banner'>
    <img src={music} alt="" className='BannerImg'/>

    <div className='profile'>

      <div className='picsart'>
    <Avatar  src={user?.images[0]?.url}/>

      </div>
    <h4>{user?.display_name}</h4>
    </div>

    <div className='playbutton'>
                     <h2>PLAY NOW</h2>
                 </div>
                 <IoHeartCircleOutline className='Favorite'/>
                 <IoShareSocial className='Share'/>
        
        </div>
  
  );
}

  
export  {Banner};
