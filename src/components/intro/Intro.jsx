import "./intro.scss";
import { init } from 'ityped';
import {useEffect, useRef} from "react";


export default function Intro() {

    const textRef= useRef();

    useEffect(()=>{
        init(textRef.current,{ 
                backDelay: 1500,
                backSpeed:60,
                showCursor: true, 
                strings: ['Developer'] })

    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1>Karan</h1>
                    <img src="assets/logo.png" alt="" />
                    <h3> Percept System <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
