import React from "react";
import "./App.css";
import Block from "./Block";





class App extends React.Component {
  
  state = {
    isHide: false,
  };


  render() {
    return (
      <div className="App">
      <button onClick={() => this.setState({ isHide: !this.state.isHide })}>
        Click Me!
      </button>
      {this.state.isHide && <Block />}
    </div>

    );
  }
}

export default App;
