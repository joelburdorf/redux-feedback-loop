import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    state = {
        comment: ''
    }
    //set state of comment value from for input
    handleChange = (propertyName, event) => {
        console.log('logging from support handleChange', event.target.value);
        this.setState({
            comment: event.target.value
        },
        );
    }
    //on buttonClick dispatch comment to redux
    buttonClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_COMMENT',
            payload: this.state
        })
        //next route to verify Component
        this.props.history.push('/verify')
    }
    //render to DOM form input text to be used to set state for comment
    //add button
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <form>
                   <label>Comment</label>
                   <br></br>
                    <textarea rows="5" cols="50" onChange={(event) => this.handleChange('comment', event)}></textarea>
                    {/* <input required type="text" name="comment" onChange={(event) => this.handleChange('comment', event)} /> */}
                </form>
                <button onClick={this.buttonClick}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comment);

