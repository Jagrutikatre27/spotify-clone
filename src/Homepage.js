import React from 'react';
import '../src/homepage.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';

function Homepage({spotify}) {
  return( <div className='app'>
       <LeftMenu/>
       <MainContainer spotify={spotify}/>
       
  </div>
  )
}

export  {Homepage};
