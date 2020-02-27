<<<<<<< HEAD
import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
=======
<<<<<<< HEAD
import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  // Maps array => ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
  genRow = vals => vals.map(data => <Cell value={data} />);
  genMatrix = () =>
    this.props.values.map(
      rowVals => <div className="row">{this.genRow(rowVals)}</div>
      //returns 10x of
      //= > ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
    );

=======
import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
<<<<<<< HEAD
=======
>>>>>>> origin/solution
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
<<<<<<< HEAD
}
=======
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
>>>>>>> d4aec8ad7ef0e62c580d68bac9b31c3f1d143088
