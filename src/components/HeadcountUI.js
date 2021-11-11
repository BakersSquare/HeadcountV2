/**
 * HeadcountUI.js
 *      The overall container for the entire display.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

import { MonitorBank } from "./MonitorBank";
import { MapRegion } from "./MapRegion";
import { ConfigRegion } from "./ConfigRegion";
import "./Headcount-UI.css";

export class HeadcountUI extends React.Component {
    render() {
        return (
            <div className="HeadcountUI">
                <MonitorBank rooms={[]} />
                <MapRegion map={null} />
                <ConfigRegion />
            </div>
        );
    }
}
