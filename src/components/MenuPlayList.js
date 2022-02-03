import React from 'react';
import {FaPlus} from "react-icons/fa";
import {BsMusicNoteList} from 'react-icons/bs';


import {PlayList} from './PlayList';



function MenuPlayList() {
  return (
   <div className='PlayListContainer'>
         <div className='nameContainer'>
             <p>PlayList</p>
             <i>
                 <FaPlus/>
             </i>
         </div>
         <div className='PlayListScroll'>
             {PlayList.map((list) => (
             <div className='PlayList' key={list?.id}>
             <i className='list'>
                 <BsMusicNoteList/>
             </i>
            
             <p>{list?.name}</p>

             {/* <i className="trash">
                 <BsTrash/>
             </i> */}
            
            </div>
             ))}
         </div>
  </div>
  );
}

export {MenuPlayList};
