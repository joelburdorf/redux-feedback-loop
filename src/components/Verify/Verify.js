import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comment extends Component {

    render() {
        return (
            <div>
                <h1>Verify Before Submission</h1>
                <p>{JSON.stringify(this.props.reduxState.feelingReducer)}</p>
                <p>{JSON.stringify(this.props.reduxState.understandingReducer)}</p>
                <p>{JSON.stringify(this.props.reduxState.supportReducer)}</p>
                <p>{JSON.stringify(this.props.reduxState.commentReducer)}</p>
            <ul>
                  
                    {/* <li>{this.props.reduxState.feelingReducer}</li>
                    <li>{this.props.reduxState.understandingReducer}</li>
                    <li>{this.props.reduxState.supportReducer}</li>
                    <li>{this.props.reduxState.commentReducer}</li> */}
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