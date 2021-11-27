import React, { Component } from "react";

class TextArea extends Component {
    constructor() {
        super();
        this.state = {
            textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
    }

    render() {
        return (
            <div>
                <label>Enter coordinates as seen in game; floor y x distance.<br/>The more coordinates added the more accurate will be the location.
                </label>
                <textarea
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    placeholder={'floor y x distance\n0 50 50 78 \n10 21 76 110'}
                />
            </div>
        );
    }
}

export default TextArea;