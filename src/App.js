import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    count: 0,
    plural: 's'
  };
    
  update() {
    this.setState((prevState, props) => {
      if (this.state.count === 0) {
        return { count: prevState.count + 1, plural: '' }
      } else {
        return { count: prevState.count + 1, plural: 's'}
      }
    });
  }
      
  render() {
    return (
      <div className="App">
        <button className="App-button" onClick={() => this.update()}>
          <span>
            {this.state.count} like{this.state.plural}
          </span>
        </button>
      </div>
    );
  }
    
}

export default App;
