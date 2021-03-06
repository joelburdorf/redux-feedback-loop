import React, { Component } from 'react';
import { connect } from 'react-redux';


class HowYaFeelin extends Component {
    state = {
        feeling: 0,
    }
    //set state of feeling value from chosen radio input
    handleChange = (propertyName, event) => {
            console.log('logging from handleChange', event.target.value);
            this.setState({
                feeling: event.target.value
         },
        );
    }
    //on buttonClick dispatch feeling to redux
    //add alert if no input from user. require input to move forward
    buttonClick = (event) => {
        //console.log('from feelings buttonClick event', this.state.feeling);
        event.preventDefault();
        if (this.state.feeling === 0) {
            alert('Please Make A Selection');
        } else {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state
        })
        //next route to understanding Component
        this.props.history.push('/understanding')
        }
    }
    //render to DOM radio input options to be used to set state for feeling
    //add button
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.buttonClick}>
                    <label>I'm very stressed.</label>
                    <input required type="radio" name="feeling" value="1"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >1</label>
                    <input required type="radio" name="feeling" value="2"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >2</label>
                    <input required type="radio" name="feeling" value="3"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >3</label>
                    <input required type="radio" name="feeling" value="4"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >4</label>
                    <input required type="radio" name="feeling" value="5"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >5</label>
                    <label>I'm feeling great!</label>
                    <button onClick={this.buttonClick}>Next</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(HowYaFeelin);