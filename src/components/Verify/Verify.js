import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comment extends Component {

    render() {
        return (
            <div>
                <h1>Verify Before Submission</h1>
            <ul>
                    <li>Feelings: {this.props.reduxState.feelingReducer}</li>
                    <li>Understanding: {this.props.reduxState.feelingReducer}</li>
                    <li>Support: {this.props.reduxState.feelingReducer}</li>
                    <li>Comment: {this.props.reduxState.feelingReducer}</li>
            </ul>
            <button>Submit</button>
             
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comment);