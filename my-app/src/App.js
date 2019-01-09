import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeItem from "./MemeItem"



class App extends Component {
  constructor(){
    super()
    this.state = {
      memes:[]
    }
  }

  componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    memes: data.data.memes
                })
            })
    }


  render() {
    const memeList = [];

    for (var i = 0; i < this.state.memes.length; i++){
      memeList[i] = <MemeItem
                      url = {this.state.memes[i].url}
                      id = {i + 1}
                      caption = {this.state.memes[i].name}
                      />
    }
    return (
      <div>
        <h1>Our favorite meme photos</h1>
        {memeList}
       </div>
    )
  }
}

export default App;
