/**
 * MonitorBank.js
 *      Defines a space for holding room monitor objects.
 *
 *      Author: Thomas Duke, 2019
 */

import React from "react";

import { RoomMonitor } from "./RoomMonitor";

export class MonitorBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: props.rooms
        };
    }

    /**
     * Data routing may be substantially different now that we've moved
     * from browser-side rendering to electron
     * TODO: Fix the data routing.
     */

    // fetchData = () => {
    //     const response = fetch("/roomCounts");
    //     const body = response.json();
    //     return body;
    // };

    // updateData = () => {
    //     const dataArr = Object.values(this.fetchData());
    //     this.setState({ rooms: dataArr });
    //     console.log(this.state.rooms);
    // };

    componentDidMount() {
        // this.query_module = setInterval(() => this.updateData(), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.query_module);
    }

    render() {
        return (
            <div className="monitor-bank">
                {this.state.rooms.map(room => (
                    <RoomMonitor
                        key={room.name}
                        name={room.name}
                        limit={room.limit}
                        count={room.count}
                    />
                ))}
            </div>
        );
    }
}
