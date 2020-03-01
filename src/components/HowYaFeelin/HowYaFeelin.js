import React, { Component } from 'react';
import { connect } from 'react-redux';


class HowYaFeelin extends Component {
    state = {
        feeling: 0,
    }

    handleChange = (propertyName, event) => {
        console.log('logging from handleChange', event.target.value);
        this.setState({
            feeling: event.target.value
        },
        );
    }

    buttonClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state
        })
        this.props.history.push('/understanding')

    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                
                <form onSubmit={this.buttonClick}>
                        
                    <label>I'm very stressed.</label>
                    <input required type="radio" id="1" name="feeling" value="1"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >1</label>
                    <input required type="radio" id="2" name="feeling" value="2"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >2</label>
                    <input required type="radio" id="3" name="feeling" value="3"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >3</label>
                    <input required type="radio" id="4" name="feeling" value="4"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >4</label>
                    <input required type="radio" id="5" name="feeling" value="5"
                        onChange={(event) => this.handleChange('feeling', event)} />
                    <label >5</label>
                    <label>I'm feeling great!</label>
                    <button onClick={this.buttonClick}>Next</button>
                        
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