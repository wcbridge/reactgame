import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
    
  };


  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  
  moveFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const clickedfriend = this.state.friends.slice(friend => friend.id === id);
   
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    this.setState({clickedfriend});
    
    //clickedfriends.concat(clickedfriend)
    //console.log(clickfriend)
    console.log(friends)
    console.log(clickedfriend)
    friends.sort(function () { return 0.5 - Math.random() });
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return (
      <Wrapper>          
        <Title>Friends List <Counter count={this.state.count} /></Title>
     
        {this.state.friends.map(friend => (

          <FriendCard
            moveFriend={this.moveFriend}
            handleIncrement={this.handleIncrement}
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
