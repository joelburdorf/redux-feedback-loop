import React, { Component } from 'react';
import { connect } from 'react-redux';


class Supported extends Component {
    state = {
        support: ''
    }

    handleChange = (event, typeofChange) => {
        this.setState({
            support: event.target.value
        },
        );
    }
    buttonClick = () => {

        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/comment')
    }
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>

                <form>
                    <fieldset id="group3">

                        <label>I feel abandoned.</label>
                        <input type='radio' value='value1' name='group3'></input>
                        <input type='radio' value='value2' name='group3'></input>
                        <input type='radio' value='value3' name='group3'></input>
                        <input type='radio' value='value4' name='group3'></input>
                        <input type='radio' value='value5' name='group3'></input>
                        <label>I feel supported!</label>
                        <button onClick={this.buttonClick}>Next</button>
                    </fieldset>
                </form>
               
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Supported);