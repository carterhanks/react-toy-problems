import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';

export default class App extends Component {
  state = {
    dog: "dog"
  }
  render() {
    return (
      <p>{this.state.dog}</p>,
      <TopicBrowser/>
    )
  }
}

// export default App;
