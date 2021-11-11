/**
 * ConfigRegion.js
 *      Defines the panel that lets users configure the display.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

import { InputEntry } from "./InputEntry";
import { InputButton } from "./InputButton";
import "./config-region.css";

export class ConfigRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            roomCount: 0,
            roomLimit: 0
        };
    }

    onNameChange = event => {
        this.setState({
            roomName: event.target.value
        });
    };

    onCountChange = event => {
        this.setState({
            roomCount: event.target.value
        });
    };

    onLimitChange = event => {
        this.setState({
            roomLimit: event.target.value
        });
    };

    onSubmit = event => {
        // fetch("/config", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this.state)
        // });
        console.log("We submitted something!");
    };

    render() {
        return (
            <div className="config-region">
                <InputEntry
                    entryType="text"
                    divClassName="config-entry"
                    labelText="Room Name:"
                    handler={this.onNameChange}
                />
                <InputEntry
                    entryType="text"
                    divClassName="config-entry"
                    labelText="Initial Count:"
                    handler={this.onCountChange}
                />
                <InputEntry
                    entryType="text"
                    divClassName="config-entry"
                    labelText="Limit:"
                    handler={this.onLimitChange}
                />

                <InputButton
                    buttonClassName="config-button"
                    clickHandler={this.onSubmit}
                    buttonText="Submit room entries"
                />
            </div>
        );
    }
}
