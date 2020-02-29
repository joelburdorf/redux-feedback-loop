import React, { Component } from 'react';


class Comment extends Component {

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>

                <form>
                   <label>Comment</label>
                   <br></br>
                   <input></input>
                </form>
                
            </div>
        )
    }
}

export default Comment;