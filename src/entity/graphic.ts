//类型
export enum GraphicNodeType {
    Rect,
    Circle,
}

export class GraphicNode{
    type:GraphicNodeType=GraphicNodeType.Rect;
    id:string;
    x:number=0;
    y:number=0;
    w:number=100;
    h:number=50;
    angle:number=0;
    color:number=0xFBFBFB;
    text:string="";
    alpha:number=1;
    borderWidth:number=1;
    borderColor:number=0x000000;
    borderAlpha:number=1;
    fontColor:number=0x000000;
    fontSize:number=14;

    constructor(id:string){
        this.id=id;
    }

    draw():void{}
}

export interface GMLApp{
    init(element: HTMLElement):void;
    draw(text:string):void;
}