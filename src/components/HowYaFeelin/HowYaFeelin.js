import React, { Component } from 'react';
import Understanding from '../Understanding/Understanding';


class HowYaFeelin extends Component {

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
                        
                    </fieldset>
                </form>
                <Understanding />
            </div>
        )
    }
}

export default HowYaFeelin;