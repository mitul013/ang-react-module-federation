import React, { useEffect } from "react";
// import './app.scss'

export default function Angular2() {

    useEffect(()=>{
        import("angular2/Component2").then(app=>{
            console.log("_________ In Angular 2 ________")
            console.log(app)
            app.default()
        })
    },[])

    return(
        <>
        <div> 
            <app-root-2></app-root-2>
        </div>
        </>
    )
}