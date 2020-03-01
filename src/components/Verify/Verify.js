import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Verify extends Component {

    buttonClick = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                // feeling: this.props.reduxState.feelingReducer,
                // understanding: this.props.reduxState.understandingReducer,
                // support: this.props.reduxState.supportReducer,
                // comment: this.props.reduxState.this.props.reduxState.commentReducer,
            }
        }).then((response) => {
            console.log(response);
            this.props.history.push('/thanks');
        }).catch((error) => {
            console.log(error);
        })
    }
        
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>{JSON.stringify(this.props.reduxState)}</p>
                <p>{JSON.stringify(this.props.reduxState.understandingReducer)}</p>
                <p>{JSON.stringify(this.props.reduxState.supportReducer)}</p>
                <p>{JSON.stringify(this.props.reduxState.commentReducer)}</p>
                {/* <h3>Feelings: {this.props.reduxState.feelingReducer.feeling}</h3> */}
            <ul>
                  
                    {/* <li>this.props.reduxState.feelingReducer</li>
                    <li>{this.props.reduxState.understandingReducer}</li>
                    <li>{this.props.reduxState.supportReducer}</li>
                    <li>{this.props.reduxState.commentReducer}</li> */}
            </ul>
                <button onClick={this.buttonClick}>Submit</button>
             
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Verify);