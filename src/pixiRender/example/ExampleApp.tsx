import {SimpleEditZone} from "@/component/editZone/SimpleEditZone.tsx";
import {PixiCanvas} from "@/pixiRender/PixiCanvas.tsx";
import {ButtonGroup, ButtonProp} from "@/component/buttonGroup";
import {ExampleMainApp} from "@/pixiRender/example/ExampleMainApp.ts";
import "./index.css"
import {useEffect} from "react";

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

    const translation=()=>{
        mainApp.gmlApp.translation(10,0);
        mainApp.redraw();
    }
    const buttons:ButtonProp[]=[];
    buttons.push({click:parse,buttonName:"Draw"});
    buttons.push({click:zoomIn,buttonName:"ZoomIn"});
    buttons.push({click:zoomOut,buttonName:"ZoomOut"});
    buttons.push({click:translation,buttonName:"scroll"});


    return (
        <div className="container">
            <div className="edit-panel">
                <ButtonGroup buttons={buttons}/>
                <SimpleEditZone/>
            </div>
            <PixiCanvas gmlApp={mainApp.gmlApp}/>
        </div>
    );
}