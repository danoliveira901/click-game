import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Card from "./components/Card/Card.js";
import images from "./images.json";

class App extends Component {
  
  state = {
    images,
    score: 0,
    topScore: 0,
    guess: ""
  };

  
  shuffle = array => {
    let m = array.length,
      t,
      i;

    
    while (m) {
      
      i = Math.floor(Math.random() * m--);

      
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

 
  checkTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      });
    }
  };

  
  handleCorrectGuess = newData => {
    this.setState(
      {
        images: this.shuffle(newData),
        score: this.state.score + 1,
        guess: true
      },
      () => {
        
        this.checkTopScore();
      }
    );
  };

  
  handleIncorrectGuess = newData => {
    this.setState({
      images: this.resetData(newData),
      score: 0,
      guess: false
    });
  };

  
  handleSelect = id => {
    
    let guessedCorrectly = false;

    
    const newData = this.state.images.map(item => {
      const newItem = { ...item };
      if (id === newItem.id) {
        if (!newItem.isClicked) {
          newItem.isClicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });

    
    this.setState({ images: newData }, () => {
      guessedCorrectly
        ? this.handleCorrectGuess(this.state.images)
        : this.handleIncorrectGuess(this.state.images);
    });
  };

  
  resetData = array => {
    const images = this.shuffle(
      array.map(item => ({ ...item, isClicked: false }))
    );
    return images;
  };

  //-------------------------------------------/
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          guess={this.state.guess}
        />
        <Jumbotron />
        <div className="wrapper">
          <div className="row justify-content-center">
            {/* Map through all the data to render images */}
            {this.state.images.map((item, i) => (
              <Card
                handleSelect={this.handleSelect}
                guess={this.state.guess}
                key={item.id}
                id={item.id}
                index={i}
                name={item.name}
                src={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
