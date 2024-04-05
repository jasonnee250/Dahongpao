import {SimpleEditZone} from "@/component/editZone/SimpleEditZone.tsx";
import {Canvas2dNormal} from "@/canvasRender/Canvas2dNormal.tsx";
import {useEffect} from "react";
import {ExampleMainApp} from "@/canvasRender/example/ExampleMainApp.ts";
import {ButtonGroup, ButtonProp} from "@/component/buttonGroup";
import './index.css'
export const ExampleApp=()=>{

    const mainApp=new ExampleMainApp();

    useEffect(() => {
        mainApp.start();
        return ()=>{
            mainApp.stop();
        }

    }, []);

    const parse=()=>{
        const htmlDom=document.getElementsByClassName("edit-zone");
        const editZone=htmlDom[0] as HTMLTextAreaElement;
        mainApp.parse(editZone.value);
    }

    const zoomIn=()=>{
        mainApp.gmlApp.scale(1.1,1.1);
        mainApp.redraw();
    }

    const zoomOut=()=>{
        mainApp.gmlApp.scale(1/1.1,1/1.1);
        mainApp.redraw();
    }
    const buttons:ButtonProp[]=[];
    buttons.push({click:parse,buttonName:"Draw"});
    buttons.push({click:zoomIn,buttonName:"ZoomIn"});
    buttons.push({click:zoomOut,buttonName:"ZoomOut"});

    return (
        <div className="container">
            <div className="edit-panel">
                <ButtonGroup buttons={buttons}/>
                <SimpleEditZone/>
            </div>
            <Canvas2dNormal gmlApp={mainApp.gmlApp}/>
        </div>
    );
}