/**
 * InputButton.js
 *      Defines a button widget for user inputs? TODO: fix this description.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

export class InputButton extends React.Component {
    render() {
        return (
            <button
                type="button"
                className={this.props.buttonClassName}
                onClick={this.props.clickHandler}
            >
                {this.props.buttonText}
            </button>
        );
    }
}
