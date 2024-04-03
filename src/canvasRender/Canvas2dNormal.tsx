import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";
import {useEffect, useRef} from "react";
import './index.css'

export const Canvas2dNormal = () => {

    const canvasRef=useRef(null);

    const resizeCanvas=()=>{
        const ratio=window.devicePixelRatio;
        // @ts-ignore
        canvasRef.current.width=ratio*canvasRef.current.clientWidth;
        // @ts-ignore
        canvasRef.current.height=ratio*canvasRef.current.clientHeight;
    }

    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize",resizeCanvas,false);
        return ()=>{
            window.removeEventListener("resize",resizeCanvas,false);
        }
    }, [canvasRef]);

    return <div className='normal-container'>
        <canvas ref={canvasRef} id={NORMAL_CANVAS_ID} className='normal-canvas'></canvas>
    </div>
}