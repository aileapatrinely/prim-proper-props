import React, { Component } from 'react';

class DinnerSupplies extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  };
  render() {
    return (
      <div>
        <h2>Dinner Supplies</h2>
        <div>Spoons: {this.state.guestList.length * 2}</div>
        <div>Forks: {this.state.guestList.length * 2}</div>
        <div>Knives: {this.state.guestList.length * 2}</div>
      </div>
    );
  }
}

export default DinnerSupplies;
