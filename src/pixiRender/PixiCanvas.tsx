import {useEffect, useRef} from "react";
import {PixiGMLApp} from "@/pixiRender/PixiGMLApp.ts";
import './index.css';

const CANVAS_ID = "main-app-canvas";

interface CanvasProps{
    gmlApp: PixiGMLApp;
}
export const PixiCanvas=({gmlApp}:CanvasProps)=>{
    const canvasRef = useRef(null);
    useEffect(() => {

        const element = document.getElementById(CANVAS_ID);
        if (element && gmlApp.stage.app==null) {
            gmlApp.init(canvasRef.current!);
            console.log(
                "begin draw stage=",
                element.clientWidth,
                element.clientHeight,
            );
            gmlApp.stage.app!.renderer.resize(
                element.clientWidth,
                element.clientHeight,
            );
        }

        return () => {
            // gmlApp?.stage.destroy();
        }

    }, [canvasRef]);

    return (<>
        <div ref={canvasRef} id={CANVAS_ID} className="canvas"/>
    </>);
}