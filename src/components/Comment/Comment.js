import React, { Component } from 'react';
import { connect } from 'react-redux';



class Comment extends Component {
    state = {
        comments: ''
    }

    handleChange = (event, typeofChange) => {
        this.setState({
            support: event.target.value
        },
        );
    }
    submitComment = () => {
        console.log('in submitComment');
        this.props.dispatch({
            type: 'SET_COMMENT',
            payload: this.state.comments
        })
        this.props.history.push('/verify')
    }

    
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>

                <form>
                   <label>Comment</label>
                   <br></br>
                   <input></input>
                </form>
                <button onClick={this.submitComment}>Next</button>
                
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comment);

