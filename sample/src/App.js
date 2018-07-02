import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  moveFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const newfriends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    this.setState({newfriends});
    console.log(friends)
    console.log(newfriends)
   friends.sort(function (a, b) { return 0.5 - Math.random() });
   newfriends.sort(function (a, b) { return 0.5 - Math.random() });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
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
