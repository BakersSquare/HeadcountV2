/**
 * RoomMonitor.js
 *      Defines a widget that shows a room's state.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";
import "./room-monitor.css";

export class RoomMonitor extends React.Component {
    renderRoomInfo = () => {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>Count: {this.props.count}</li>
                <li>Limit: {this.props.limit}</li>
            </ul>
        );
    };

    render() {
        if (this.props.count >= this.props.limit) {
            return (
                <div className="room-monitor-full">{this.renderRoomInfo()}</div>
            );
        } else {
            return (
                <div className="room-monitor-clear">
                    {this.renderRoomInfo()}
                </div>
            );
        }
    }
}
