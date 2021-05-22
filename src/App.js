import React from "react";
import "./App.css";
import Block from "./Block";
class Data extends React.Component {
  state = {
    isHide: false,
  };

  componentDidMount() {
    alert("1")
  }

  componentWillUnmount() {
    alert("1")
  }

  render() {
    console.log("render from return");
    return (
      <div className = "App">
        <button onClick={() => this.setState({ isHide: !this.state.isHide })}>
        Click Me!
        </button>
        {this.state.isHide && <Block />}
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      {/* <Block /> */}
      <Data />
    </div>
  );
};

export default App;
