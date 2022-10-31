import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string"

import "./chat.css"

let socket;
const Chat = () => {
    console.log("🚀 ~ file: Chat.js ~ line 9 ~ Chat ~ location", document)
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const baseURL = "localhost:4000";

    useEffect(() => {
        const { name, room } = queryString.parse(document.location.search);
        socket = io(baseURL);

        setName(name);
        setRoom(room);
        console.log("🚀 ~ file: Chat.js ~ line 19 ~ useEffect ~ socket", socket)
        socket.emit("join", { name, room }, (err) => {
            console.log("🚀 ~ file: Chat.js ~ line 21 ~ socket.emit ~ room", room)
        });

    }, [baseURL, document.location.search]);


    return (
        <h1>
            Chat
        </h1>
    )
}

export default Chat;