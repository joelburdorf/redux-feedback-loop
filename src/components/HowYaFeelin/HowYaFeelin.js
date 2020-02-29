import React, { Component } from 'react';
import { connect } from 'react-redux';


class HowYaFeelin extends Component {
    state = {
        feeling: ''
    }

    handleChange = (event, typeofChange) => {
        this.setState({
            feeling: event.target.value
        },
        );
    }

    buttonClick = () => {

        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding')

    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                
                <form>
                    <fieldset id="group1">
                        
                        <label>I'm very stressed.</label>
                        <input type='radio' value='value1' name='group1'></input> 
                        <input type='radio' value='value2' name='group1'></input> 
                        <input type='radio' value='value3' name='group1'></input> 
                        <input type='radio' value='value4' name='group1'></input> 
                        <input type='radio' value='value5' name='group1'></input> 
                        <label>I'm feeling great!</label>
                        <button onClick={this.buttonClick}>Next</button>
                        
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

// export default HowYaFeelin;

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(HowYaFeelin);