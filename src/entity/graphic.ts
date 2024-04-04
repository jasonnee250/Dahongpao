//类型
export enum GraphicNodeType {
    Rect,
    Circle,
}

export enum GraphLineType{
    Line,
    PolyLine,
    Curve,
}

export class Point{
    x:number=0;
    y:number=0;
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y;
    }
}
export class TransformMatrix{
    a:number=1;
    b:number=0;
    c:number=0;
    d:number=1;
    e:number=0;
    f:number=0;
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

export class GraphLinkLine{
    id:string;
    start:string="";
    end:string="";
    type:GraphLineType=GraphLineType.PolyLine;

    constructor(id:string) {
        this.id=id;
    }
}

export abstract class IGraphicLine {
    id:string;
    color:number=0x000000;
    alpha:number=1;
    width:number=1;
    fontColor:number=0x000000;
    fontSize:number=14;
    constructor(id:string) {
        this.id=id;
    }

    abstract draw():void;

}
//折线
export class PolyLine extends IGraphicLine{
    points:Point[]=[];

    draw():void{};
}
//直线
export class SimpleLine extends IGraphicLine{
    start:Point=new Point(0,0);
    end:Point=new Point(0,0);

    draw() {}
}

export abstract class ILineLayout{
    abstract type:GraphLineType;
    abstract layout(nodeMap:Map<string,GraphicNode>,linkLine:GraphLinkLine):IGraphicLine|null;
}