import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thank_You extends Component {

    render() {
        return (
            <div>
                <h1>Thank you for your feedback!</h1>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Thank_You);