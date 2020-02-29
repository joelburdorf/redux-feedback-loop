import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Supported from '../Supported/Supported';


class Understanding extends Component {
    state = {
        understanding: ''
    }

    handleChange = (event, typeofChange) => {
        this.setState({
            feeling: event.target.value
        },
        );
    }
    buttonClick = () => {

        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/supported')
    }

    render() {
      

        return (
            <div>
                <h1>How well are you understanding the content?</h1>

                <form>
                    <fieldset id="group2">

                        <label>I'm totally lost.</label>
                        <input type='radio' value='value1' name='group2'></input>
                        <input type='radio' value='value2' name='group2'></input>
                        <input type='radio' value='value3' name='group2'></input>
                        <input type='radio' value='value4' name='group2'></input>
                        <input type='radio' value='value5' name='group2'></input>
                        <label>I've got this!</label>
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

export default connect(putReduxStateOnProps)(Understanding);