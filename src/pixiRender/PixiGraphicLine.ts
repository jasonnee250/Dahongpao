import {PolyLine, SimpleLine} from "@/entity/graphic.ts";
import {Graphics, Text} from "pixi.js";

export class PixiSimpleLine extends SimpleLine{

    g:Graphics;
    textGraphics:Text;
    static copyFrom(node: SimpleLine): PixiSimpleLine {
        const graphNode = new PixiSimpleLine(node.id);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    constructor(id:string) {
        super(id);
        this.g=new Graphics();
        this.textGraphics=new Text();
    }
    draw() {
        this.g.clear();
        this.g.lineStyle(this.width,this.color,this.alpha);
        this.g.moveTo(this.start.x,this.start.y);
        this.g.lineTo(this.end.x,this.end.y);
    }
}


export class PixiPolyLine extends PolyLine{
    g:Graphics;
    textGraphics:Text;
    static copyFrom(node: PolyLine): PixiPolyLine {
        const graphNode = new PixiPolyLine(node.id);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    constructor(id:string) {
        super(id);
        this.g=new Graphics();
        this.textGraphics=new Text();
    }
    draw() {
        if(this.points.length<2){
            return;
        }
        this.g.clear();
        const start=this.points[0];
        this.g.lineStyle(this.width,this.color,this.alpha);
        this.g.moveTo(start.x,start.y);
        for(let i=1;i<this.points.length;i++){
            const point=this.points[i];
            this.g.lineTo(point.x,point.y);
        }
    }
}