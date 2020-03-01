import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    state = {
        comments: ''
    }

    handleChange = (propertyName, event) => {
        console.log('logging from support handleChange', event.target.value);
        this.setState({
            comments: event.target.value
        },
        );
    }

    buttonClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_COMMENT',
            payload: this.state
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
                    <input required type="text" name="comment" onChange={(event) => this.handleChange('comment', event)} />
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

