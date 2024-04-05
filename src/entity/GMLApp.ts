import {GraphicNode, GraphLinkLine, IGraphicLine} from "@/entity/graphic.ts";


export interface GMLData{
    nodeMap: Map<string, GraphicNode>;
    linkMap:Map<string,GraphLinkLine>;
    lineMap:Map<string,IGraphicLine>;
}
export interface GMLApp{
    canvas:HTMLElement|null;
    init(element: HTMLCanvasElement):void;
    reset():void;
    parse2GMLData(text:string):GMLData;
    draw(text:string):void;
    drawData(nodeMap: Map<string, GraphicNode>, lineMap: Map<string, IGraphicLine>):void;
    layoutLine(nodeMap:Map<string,GraphicNode>, linkLine:GraphLinkLine):IGraphicLine|null;

    scale(sx:number,sy:number):void;
    translation(dx:number,dy:number):void;
    resetTransform():void;
}