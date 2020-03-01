import React, { Component } from 'react';
import { connect } from 'react-redux';


class Supported extends Component {

    state = {
        support: 0,
    }

    handleChange = (propertyName, event) => {
        console.log('logging from support handleChange', event.target.value);
        this.setState({
            support: event.target.value
        },
        );
    }
    buttonClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state
        })
        this.props.history.push('/comment')
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>

              <form>
                    <label>I feel abandoned.</label>
                    <input required type="radio" id="1" name="support" value="1"
                    onChange={(event) => this.handleChange('support', event)} />
                    <label >1</label>
                        <input required type="radio" id="2" name="support" value="2"
                    onChange={(event) => this.handleChange('support', event)} />
                    <label >2</label>
                        <input required type="radio" id="3" name="support" value="3"
                    onChange={(event) => this.handleChange('support', event)} />
                    <label >3</label>
                        <input required type="radio" id="4" name="support" value="4"
                    onChange={(event) => this.handleChange('support', event)} />
                    <label >4</label>
                        <input required type="radio" id="5" name="support" value="5"
                    onChange={(event) => this.handleChange('support', event)} />
                    <label >5</label>
                    <label>I feel supported!</label>
                    <button onClick={this.buttonClick}>Next</button>
                </form>
               
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Supported);