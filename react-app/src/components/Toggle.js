import React, { Component, lazy, Suspense } from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    callFunction(){
      alert('Calling Function');
      fetch('https://func-0001-staticwebapp-test.azurewebsites.net/api/ygge?code=L3dZfQpUgMhvGbtFKX3FxmUO_j4H9Q2tUlQUH6eznNQwAzFuzYLwNQ==')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         alert(data);
         //setPosts(data);
      })
      .catch((err) => {
          alert(err.message);
         console.log(err.message);
      });
    }

    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <button onClick={this.callFunction}>
            
          </button>
        </div>

      );
    }
  }

  export default Toggle;