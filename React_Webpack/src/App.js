import React from "react";
import ReactDom from "react-dom"
import Angular1 from "./Angular1";
import Angular2 from "./Angular2";
import './app.scss'

export default function() {
    return(
        <>
        <div> this is Container</div>
        <hr/>
        <Angular1></Angular1>
        <hr/>
        <Angular2></Angular2>
        </>
    )
}