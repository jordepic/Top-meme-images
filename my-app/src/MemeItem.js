import React from "react"
import './App.css';

function MemeItem (props){
  return (
    <div>
      <img className = "meme" src = {props.url}/>
      <p>{props.caption} {props.id}</p>
    </div>
  )
}

export default MemeItem
