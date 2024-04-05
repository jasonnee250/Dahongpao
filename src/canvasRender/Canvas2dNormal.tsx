import {useEffect, useRef} from "react";
import './index.css'
import {GMLApp} from "@/entity";

interface IProps{
    gmlApp:GMLApp
}
export const Canvas2dNormal = ({gmlApp}:IProps) => {

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
        gmlApp.init(canvasRef.current!);
        window.addEventListener("resize",resizeCanvas,false);
        return ()=>{
            window.removeEventListener("resize",resizeCanvas,false);
        }
    }, [canvasRef]);

    return <div className='normal-container'>
        <canvas ref={canvasRef} className='normal-canvas'></canvas>
    </div>
}