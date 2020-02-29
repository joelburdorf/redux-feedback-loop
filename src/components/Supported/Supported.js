import React, { Component } from 'react';
import Comment from '../Comment/Comment';


class Supported extends Component {

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

                    </fieldset>
                </form>
                <Comment />
            </div>
        )
    }
}

export default Supported;