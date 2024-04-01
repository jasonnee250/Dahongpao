import React, {useEffect, useRef} from "react";
import "./App.css";
import {GMLApp} from "@/app/GMLApp.ts";

const CANVAS_ID = "main-app-canvas";

function App() {
    const canvasRef = useRef(null);
    let gmlApp: GMLApp | null = null;
    useEffect(() => {
        gmlApp = new GMLApp();

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
            gmlApp?.stage.destroy();
        }

    }, [canvasRef]);

    // const [text,setText]=useState<string>("");

    const ref = useRef(null);

    const draw = () => {
        console.log("========>text draw:", ref.current!.value)
        gmlApp!.draw(ref.current!.value);
    }

    // const textChange=(code:any)=>{
    //     console.log("========>text change:",code.text)
    //     setText(code.text);
    // }

    return (
        <div className="container">
            <div className="left-zone">
                <div className="button-group">
                    <button className="button" onClick={draw}>To Draw</button>
                </div>
                <textarea className="edit-zone" ref={ref}>
                </textarea>
            </div>
            <div ref={canvasRef} id={CANVAS_ID} className="canvas"/>
        </div>
    );
}

const AppMemo = React.memo(App);
export default AppMemo;
