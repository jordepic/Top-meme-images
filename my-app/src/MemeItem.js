import React from "react"
import './App.css';

class MemeItem extends React.Component{
  constructor(){
    super()
    this.state = {
      votes: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
        this.setState(prevState => {
            return {
                votes: prevState.votes + 1
            }
        })
    }

  render(){
    return (
      <div onClick = {this.handleClick}>
        <img className = "meme" src = {this.props.url}/>
        <p>{this.props.id} - {this.props.caption} - Votes: {this.state.votes}</p>
      </div>
    )
  }
}

export default MemeItem
