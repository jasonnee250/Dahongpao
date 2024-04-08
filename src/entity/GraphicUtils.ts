import {GraphicNode, GraphicNodeType, Point, TreeNode} from "@/entity/graphic.ts";
import {AffineMatrix} from "@/math/AffineMatrix.ts";

export class GraphicUtils {

    static centerPoint(node: GraphicNode): Point {
        return {
            x: node.x + 0.5 * node.w,
            y: node.y + 0.5 * node.h,
        }
    }

    static topPoint(node: GraphicNode): Point {
        return {
            x: node.x + 0.5 * node.w,
            y: node.y,
        }
    }

    static rightPoint(node: GraphicNode): Point {
        if(node.type===GraphicNodeType.Parallelogram){
            const delta=0.2*node.w;
            return {
                x:node.x+node.w-0.5*delta,
                y:node.y+0.5*node.h,
            }
        }
        if(node.type===GraphicNodeType.Triangle){
            return {
                x:node.x+node.w-0.25*node.w,
                y:node.y+0.5*node.h,
            }
        }
        if(node.type===GraphicNodeType.Trapezoid){
            const delta=0.2*node.w;
            return {
                x:node.x+node.w-0.5*delta,
                y:node.y+0.5*node.h,
            }
        }
        return {
            x: node.x + node.w,
            y: node.y + 0.5 * node.h,
        }
    }

    static bottomPoint(node: GraphicNode): Point {
        return {
            x: node.x + 0.5 * node.w,
            y: node.y + node.h,
        }
    }

    static leftPoint(node: GraphicNode): Point {
        if(node.type===GraphicNodeType.Parallelogram){
            const delta=0.2*node.w;
            return {
                x:node.x+0.5*delta,
                y:node.y+0.5*node.h,
            }
        }
        if(node.type===GraphicNodeType.Triangle){
            return {
                x:node.x+0.25*node.w,
                y:node.y+0.5*node.h,
            }
        }
        if(node.type===GraphicNodeType.Trapezoid){
            const delta=0.2*node.w;
            return {
                x:node.x+0.5*delta,
                y:node.y+0.5*node.h,
            }
        }
        return {
            x: node.x,
            y: node.y + 0.5 * node.h,
        }
    }

    static topLeft(node: GraphicNode): Point {
        return {
            x: node.x,
            y: node.y,
        }
    }
    static topRight(node: GraphicNode): Point {
        return {
            x: node.x+node.w,
            y: node.y,
        }
    }
    static bottomLeft(node: GraphicNode): Point {
        return {
            x: node.x,
            y: node.y+node.h,
        }
    }
    static bottomRight(node: GraphicNode): Point {
        return {
            x: node.x+node.w,
            y: node.y+node.h,
        }
    }

    static middleInsertPoint(start: Point, end: Point, points: Point[]) {
        const p1 = new Point(start.x, end.y);
        points.push(start, p1, end);
    }

    static doubleMiddleInsertPoint(start: Point, end: Point, points: Point[]) {
        const p1 = new Point(0.5 * (start.x + end.x), start.y);
        const p2 = new Point(0.5 * (start.x + end.x), end.y);
        points.push(start, p1, p2, end);
    }

    static rectContains(point: Point, node: GraphicNode): boolean {
        return point.x > node.x && point.x < node.x + node.w && point.y > node.y && point.y < node.y + node.h;
    }

    static distance(a:Point,b:Point):number{
        return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y));
    }

    static lineAngle(a:Point,b:Point):number{
        if(Math.abs(a.x-b.x)<1e-3){
            return b.y>a.y? Math.PI*0.5:-Math.PI*0.5;
        }
        const k=(b.y-a.y)/(b.x-a.x);
        let rad=Math.atan(k);
        if(b.x<a.x){
            rad+=Math.PI;
        }
        return rad;
    }

    static basicGetArrowPoint(start:Point,end:Point,p1:Point,p2:Point){
        const lineAngle=GraphicUtils.lineAngle(start,end);
        const m=AffineMatrix.generateMatrix()
            .translate(start.x,start.y)
            .rotate2(lineAngle);
        const a=m.crossPoint(p1);
        const b=m.crossPoint(p2);
        return {a,b};
    }

    static getLArrowPoint(start:Point,end:Point,l:number=5){
        const p1=new Point(Math.sqrt(3)*0.5*l,0.5*l);
        const p2=new Point(Math.sqrt(3)*0.5*l,-0.5*l);
        return GraphicUtils.basicGetArrowPoint(start,end,p1,p2);
    }

    static getRArrowPoint(start:Point,end:Point,l:number=5){
        const distance=GraphicUtils.distance(start,end);
        const p1=new Point(distance-Math.sqrt(3)*0.5*l,0.5*l);
        const p2=new Point(distance-Math.sqrt(3)*0.5*l,-0.5*l);
        return GraphicUtils.basicGetArrowPoint(start,end,p1,p2);
    }

    static getBounds(nodes:TreeNode[],id:string="getBounds"):TreeNode{
        const xList=[]
        const yList=[];
        for(const node of nodes){
            xList.push(node.maxX,node.minX);
            yList.push(node.maxY,node.minY);
        }
        return {
            id,
            minX:Math.min(...xList),
            maxX:Math.max(...xList),
            minY:Math.min(...yList),
            maxY:Math.max(...yList),
        }
    }

    static getBoundsByPoints(points:Point[]):TreeNode{
        const xList=[]
        const yList=[];
        for(const node of points){
            xList.push(node.x);
            yList.push(node.y);
        }
        return {
            id:"getBounds",
            minX:Math.min(...xList),
            maxX:Math.max(...xList),
            minY:Math.min(...yList),
            maxY:Math.max(...yList),
        }
    }

}