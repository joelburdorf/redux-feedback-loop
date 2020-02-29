import React, { Component } from 'react';
import Supported from '../Supported/Supported';


class Understanding extends Component {

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

                    </fieldset>
                </form>
                <Supported />
            </div>
        )
    }
}

export default Understanding;