import React, { Component } from 'react';
import axios from 'axios';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  // DOM is ready
  componentDidMount() { // react Component method
    this.showFeedback();
  }

  showFeedback = () => {
    console.log('in showFeedback because component App did mount');
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('this is response in showFeedback', response.data);
      this.props.dispatch({
        type: 'SET_FEEDBACK',
        payload: response.data
      })

    }).catch((err) => {
      console.log('cannot GET feedback');

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
        <br/>
        <p>{JSON.stringify(this.props.reduxState.feedbackReducer)}</p>
      </div>
    );
  }
}



const putReduxStateOnProps = (reduxState) => ({
  reduxState,
})

export default connect(putReduxStateOnProps)(App);


