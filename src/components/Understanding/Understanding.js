import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: 0,
    }
    //set state of understanding value from chosen radio input
    handleChange = (propertyName, event) => {
        console.log('logging from understanding handleChange', event.target.value);
        this.setState({
            understanding: event.target.value
        },
        );
    }
    //on buttonClick dispatch understanding to redux
    //add alert if no input from user. require input to move forward
    buttonClick = (event) => {
        //console.log('from feelings buttonClick event', this.state.understanding);
        event.preventDefault();
        if (this.state.understanding === 0) {
            alert('Please Make A Selection');
        } else {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state
        })
        //next route to supported Component
        this.props.history.push('/supported')
        }
    }
    //render to DOM radio input options to be used to set state for understanding
    //add button
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <form>
                    <label>I'm totally lost.</label>
                    <input required type="radio" name="understanding" value="1"
                        onChange={(event) => this.handleChange('understanding', event)} />
                            <label >1</label>
                    <input required type="radio" name="understanding" value="2"
                        onChange={(event) => this.handleChange('understanding', event)} />
                            <label >2</label>
                    <input required type="radio" name="understanding" value="3"
                        onChange={(event) => this.handleChange('understanding', event)} />
                            <label >3</label>
                    <input required type="radio" name="understanding" value="4"
                        onChange={(event) => this.handleChange('understanding', event)} />
                            <label >4</label>
                    <input required type="radio" name="understanding" value="5"
                        onChange={(event) => this.handleChange('understanding', event)} />
                        <label >5</label>
                    <label>I've got this!</label>
                    <button onClick={this.buttonClick}>Next</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);