import React from 'react';

function Contacts(props){

  return(
    <div className= "Contacts">
      <h3> {props.name} </h3>
      <img src= {props.imgUrl}/>
      <p> Phone: {props.phone} </p>
      <p style = {{display: props.email ? "block" : "none"}}> Email: {props.email} </p>
    </div>
  )
}




export default Contacts;
