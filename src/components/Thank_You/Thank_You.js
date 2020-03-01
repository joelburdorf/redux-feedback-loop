import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thank_You extends Component {

    buttonClick = ()=> {
        //next route to howYaFeelin Component
        this.props.history.push('/')
    }
    //on buttonClick go back to add a new feedback
    render() {
        return (
            <div>
                <h1>Submission Successful!</h1>
                <h1>Thank you for your feedback!</h1>
                <button onClick={this.buttonClick}>Add New Feedback</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Thank_You);