import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route,  } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

//Routes to components
import HowYaFeelin from '../HowYaFeelin/HowYaFeelin';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import Verify from '../Verify/Verify';
import Thank_You from '../Thank_You/Thank_You';

class App extends Component {

  // I useded this GET early on to verify that my App was talking with the server/router/Db

  // componentDidMount() { 
  //   this.showFeedback();
  // }

  // showFeedback = () => {
  //   console.log('in showFeedback because component App did mount');
  //   axios({
  //     method: 'GET',
  //     url: '/feedback'
  //   }).then((response) => {
  //     console.log('this is response in showFeedback', response.data);
  //     this.props.dispatch({
  //       type: 'SET_FEEDBACK',
  //       payload: response.data
  //     })
  //   }).catch((err) => {
  //     console.log('cannot GET feedback');

  //   })
  // }

  render() {
    //add a header that will remain on each page
    //add routes for each page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
        <br/>
        {/* <p>{JSON.stringify(this.props.reduxState.feedbackReducer)}</p> */}
        <Router>
          <Route exact path="/" component={HowYaFeelin} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comment" component={Comment} />
          <Route path="/verify" component={Verify} />
          <Route path="/thanks" component={Thank_You} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
})

export default connect(putReduxStateOnProps)(App);


