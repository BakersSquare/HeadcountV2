/**
 * InputEntry.js
 *      Defines a text entry field for user configuration input.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

export class InputEntry extends React.Component {
    render() {
        if (this.props.entryType === "text") {
            return (
                <div className={this.props.divClassName}>
                    <label>{this.props.labelText}</label>
                    <input type="text" onChange={this.props.handler} />
                </div>
            );
        } else if (this.props.entryType === "file") {
            return (
                <div className={this.props.divClassName}>
                    <label>{this.props.labelText}</label>
                    <input
                        type="file"
                        onChange={this.props.handler}
                        multiple={false}
                        accepts="image/*"
                    />
                </div>
            );
        } else {
            return <div> Invalid Input Entry </div>;
        }
    }
}
