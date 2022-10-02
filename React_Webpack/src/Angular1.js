import React, { useEffect } from "react";
// import './app.scss'

export default function Angular1() {

    useEffect(()=>{
        import("angular1/Component1").then(app=>{
            console.log("_________ In Angular 1 ________")
            console.log(app);
            app.default()
        })
    },[])

    return(
        <>
        <div> 
            <app-root></app-root>
        </div>
        </>
    )
}