import React, { Component } from 'react'

export default class Propss extends Component {
  render() {
    return ( 
      <div>
        <h1>{this.props.name} Hiwote  {this.props.age}</h1>

        {this.props.children}
      </div>
    )
  }
}
