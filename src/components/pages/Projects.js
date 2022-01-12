import React from "react";
import Message from "../layout/Message";
import { useLocation } from "react-router-dom";

export default function Projects() {
    const location = useLocation();
    let message = "";
    let minhaprop = "";

    if (location.state) {
        alert(location.state.minhaprop);
        message = location.state.message;
        minhaprop = location.state.minhaprop

    }

    return (
        <>
            <h1> Projects 1814</h1>
            {message && <Message msg={ minhaprop } type="success" /> }
        </>
    );

}