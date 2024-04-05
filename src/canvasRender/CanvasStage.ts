export class CanvasStage {

    element:HTMLCanvasElement|null=null;

    init(element: HTMLCanvasElement){
        this.element=element;
    }

    clear(){
        if(!this.element){
            console.error("Error! The canvas is null!");
            return;
        }
        const ctx=this.element.getContext("2d");
        ctx!.reset();
    }
}