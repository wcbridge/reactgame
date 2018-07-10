import React from "react"
import CardBody from "./CardBody";
//import FriendCard from "./components/FriendCard";

class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };


handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
};



    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    <h3 className="card-title">Score!</h3>
                </div>
                <CardBody
                    count={this.state.count}
                    handleIncrement={this.handleIncrement}

                />
            </div>
        );
    }
}

export default Counter;
//const score = 