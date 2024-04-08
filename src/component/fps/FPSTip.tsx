import {useEffect, useState} from "react";
import "./index.css"

let prevTimestamp:number|undefined=undefined;
let count=0;
function loopFPS(cb:any){
    return (timestamp:number)=>
    {
        if (prevTimestamp) {
            count++;
            if (timestamp - prevTimestamp >= 1000) {
                cb(count);
                prevTimestamp = timestamp;
                count = 0;
            }
        } else {
            prevTimestamp = timestamp;
        }
        window.requestAnimationFrame(loopFPS(cb));
    }
}

export const FPSTip = () => {

    const [fps,setFPS]=useState<number>();

    useEffect(() => {
        window.requestAnimationFrame(loopFPS(setFPS));
    }, []);

    return (
        <div className='fps-tip'>
            {fps}
        </div>
    )
}