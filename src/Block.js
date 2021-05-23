import React from "react";

class Block extends React.Component {
    
  componentDidMount()
  {
    alert('1')
  }

  componentWillUnmount() 
  {
    alert('2')
  }

  render() {
    return (
      <div>
        <h1>Hello world!!!</h1>
      </div>
    );
  }
}

export default Block;
