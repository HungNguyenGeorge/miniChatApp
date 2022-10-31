import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./join.css"


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="wrapper">
            <div className="join-form">
                <h5>JOIN </h5>
                <input placeholder="Name" onChange={event => setName(event.target.value)} />
                <input placeholder="Room" onChange={event => setRoom(event.target.value)} />
                <Link onClick={event => !name || !room ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" >Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;