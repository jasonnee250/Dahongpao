import React, {useRef} from "react";
import "./App.css";
import {PixiCanvas} from "@/pixiRender/PixiCanvas.tsx";
import {PixiGMLApp} from "@/pixiRender/PixiGMLApp.ts";

function App() {

    const ref = useRef(null);
    const gmlApp:PixiGMLApp=new PixiGMLApp();

    const draw = () => {
        console.log("========>text draw:", ref.current!.value)
        gmlApp!.draw(ref.current!.value);
    }

    return (
        <div className="container">
            <div className="left-zone">
                <div className="button-group">
                    <button className="button" onClick={draw}>To Draw</button>
                </div>
                <textarea className="edit-zone" ref={ref}>
                </textarea>
            </div>
            <PixiCanvas gmlApp={gmlApp}/>
        </div>
    );
}

const AppMemo = React.memo(App);
export default AppMemo;
