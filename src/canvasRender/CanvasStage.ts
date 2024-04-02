import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";

export class CanvasStage {

    init(_element: HTMLElement){}

    clear(){
        const canvas=document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx=canvas.getContext("2d");
        ctx!.reset();
    }
}