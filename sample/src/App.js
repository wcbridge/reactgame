import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends,
    count: 0,
    clickedfriend: []
    
  };


  
  moveFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
   
    const friends = this.state.friends;
    const clickedfriend = this.state.friends.filter(friend => friend.id === id);
    if (!clickedfriend[0].clicked) {
      clickedfriend[0].clicked = true;
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: 0 });
     // this.setState({ clickedfriend: resetArray });
      this.state.friends.slice().forEach((friend) => {
        friend.clicked = false;
      });
      this.setState({ friends: this.state.friends });
    }

    // Set this.state.friends equal to the new friends array
     this.setState({ friends });
    console.log(clickedfriend);
    friends.sort(function () { return 0.5 - Math.random() });
  
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return (
      <Wrapper>          
        <Title>
          Friends List
              <div className="card text-center">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title">Score!</h3>
              <div>{this.state.count}</div>
            </div>

          </div>
        </Title>
     
        {this.state.friends.map(friend => (

          <FriendCard
            moveFriend={this.moveFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
