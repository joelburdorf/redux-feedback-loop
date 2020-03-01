import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Verify extends Component {
    //on buttonClick set data to obj values from store then POST to server/router/Db. 
    //use /feedback url to match router POST
    buttonClick = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.reduxState.feelingReducer.feeling,
                understanding: this.props.reduxState.understandingReducer.understanding,
                support: this.props.reduxState.supportReducer.support,
                comment: this.props.reduxState.commentReducer.comment,
            },
        }).then((response) => {
            console.log(response);
            //next route to thanks Component
            this.props.history.push('/thanks');
        }).catch((error) => {
            console.log(error);
        })
    }
    //add all ratings to the DOM for verification and submission to Db on buttonClick
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/* <p>{JSON.stringify(this.props.reduxState.feelingReducer.feeling)}</p>
                <p>{JSON.stringify(this.props.reduxState.understandingReducer.understanding)}</p>
                <p>{JSON.stringify(this.props.reduxState.supportReducer.support)}</p>
                <p>{JSON.stringify(this.props.reduxState.commentReducer.comment)}</p>     */}
                
                <h2>Feeling Rating: {this.props.reduxState.feelingReducer.feeling}</h2>
                <h2>Understanding Rating: {this.props.reduxState.understandingReducer.understanding}</h2>
                <h2>Support Rating: {this.props.reduxState.supportReducer.support}</h2>
                <h2>Comment: {this.props.reduxState.commentReducer.comment}</h2>
                <h3>Please Verify and Submit</h3>
                <button onClick={this.buttonClick}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Verify);