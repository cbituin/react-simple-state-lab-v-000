<<<<<<< HEAD
import React, { Component } from 'react';

export default class Cell extends Component {
  
=======
<<<<<<< HEAD
import React, { Component } from "react";

export default class Cell extends Component {
=======
import React, { Component } from 'react';

export default class Cell extends Component {
  
>>>>>>> origin/solution
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    };
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
<<<<<<< HEAD
  
}
=======
=======
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
>>>>>>> origin/solution
}
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
