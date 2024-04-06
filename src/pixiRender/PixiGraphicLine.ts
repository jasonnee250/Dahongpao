import {PolyLine, SimpleLine} from "@/entity/graphic.ts";
import {Graphics, Text} from "pixi.js";
import {GraphicUtils} from "@/entity";

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
        this.drawArrow();
    }

    private drawArrow(){
        const l = 10;
        if (this.rArrow) {
            const {a,b} = GraphicUtils.getRArrowPoint(this.start, this.end, l);
            this.g.moveTo(a.x, a.y);
            this.g.lineTo(this.end.x, this.end.y);
            this.g.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const {a,b} = GraphicUtils.getLArrowPoint(this.start, this.end, l);
            this.g.moveTo(a.x, a.y);
            this.g.lineTo(this.start.x, this.start.y);
            this.g.lineTo(b.x, b.y);
        }
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
        this.drawArrow();
    }

    private drawArrow(){
        if(this.points.length<2){
            return;
        }
        const l = 10;
        if (this.rArrow) {
            const n=this.points.length;
            const start=this.points[n-2];
            const end=this.points[n-1];
            const {a,b} = GraphicUtils.getRArrowPoint(start, end, l);
            this.g.moveTo(a.x, a.y);
            this.g.lineTo(end.x, end.y);
            this.g.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const start=this.points[0];
            const end=this.points[1];
            const {a,b} = GraphicUtils.getLArrowPoint(start, end, l);
            this.g.moveTo(a.x, a.y);
            this.g.lineTo(start.x, start.y);
            this.g.lineTo(b.x, b.y);
        }
    }
}