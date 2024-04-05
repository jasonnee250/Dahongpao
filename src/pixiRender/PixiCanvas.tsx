import {useEffect, useRef} from "react";
import {PixiGMLApp} from "@/pixiRender/PixiGMLApp.ts";
import './index.css';

interface CanvasProps {
    gmlApp: PixiGMLApp;
}

export const PixiCanvas = ({gmlApp}: CanvasProps) => {
    const canvasRef = useRef(null);

    const resizeCanvas = () => {
        const ratio = window.devicePixelRatio;
        // @ts-ignore
        gmlApp.stage.app!.renderer.resize(canvasRef.current!.clientWidth / ratio, canvasRef.current!.clientHeight / ratio);
    }

    useEffect(() => {

        gmlApp.init(canvasRef.current!);
        resizeCanvas();
        window.addEventListener("resize",resizeCanvas,false);

        return () => {
            gmlApp?.stage.destroy();
            window.removeEventListener("resize",resizeCanvas,false);

        }

    }, [canvasRef]);

    return (<>
        <div ref={canvasRef} className="canvas"/>
    </>);
}