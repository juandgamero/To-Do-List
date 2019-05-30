import React from 'react';
import todoData from './todoData';

function MainContent(props){
  return(
    <div className= "item">

      <input type="checkbox" checked = {props.item.completed} />
      <p> {props.item.text} </p>

    </div>
  )

}

export default MainContent;
