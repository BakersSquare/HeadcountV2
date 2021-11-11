/**
 * MapRegion.js
 *      Defines the space for the user to upload a view a map of the rooms
 * the system is monitoring.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

import { InputButton } from "./InputButton";
import { InputEntry } from "./InputEntry";
import "./map-region.css";

export class MapRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: props.map
        };
    }

    onUpload = event => {
        this.setState({ map: URL.createObjectURL(event.target.files[0]) });
    };

    onReset = event => {
        console.log("Supposed to reset!");
        this.setState({ map: null });
    };

    render() {
        if (this.state.map === null) {
            return (
                <InputEntry
                    entryType="file"
                    divClassName="map-upload"
                    labelText="Please upload an image:"
                    handler={this.onUpload}
                />
            );
        } else {
            return (
                <div className="map">
                    <img
                        src={this.state.map}
                        alt="Selected map can't be displayed"
                        max-height={250}
                        max-width={250}
                    />
                    <InputButton
                        buttonClassName="reset-img-button"
                        clickHandler={this.onReset}
                        buttonText="Reset Map"
                    />
                </div>
            );
        }
    }
}
