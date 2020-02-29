import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Supported from '../Supported/Supported';


class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleChange = (propertyName, event) => {
        console.log('logging from understanding handleChange', event.target.value);
        this.setState({
            understanding: event.target.value
        },
        );
    }
    buttonClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state
        })
        this.props.history.push('/supported')
    }


    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>

                <form>
                        <label>I'm totally lost.</label>
                        <input required type="radio" id="1" name="understanding" value="1"
                            onChange={(event) => this.handleChange('understanding', event)} />
                                <label >1</label>
                        <input required type="radio" id="2" name="understanding" value="2"
                            onChange={(event) => this.handleChange('understanding', event)} />
                                <label >2</label>
                        <input required type="radio" id="3" name="understanding" value="3"
                            onChange={(event) => this.handleChange('understanding', event)} />
                                <label >3</label>
                        <input required type="radio" id="4" name="understanding" value="4"
                            onChange={(event) => this.handleChange('understanding', event)} />
                                <label >4</label>
                        <input required type="radio" id="5" name="understanding" value="5"
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