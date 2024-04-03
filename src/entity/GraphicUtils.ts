import {GraphicNode, Point} from "@/entity/graphic.ts";

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
        return {
            x: node.x,
            y: node.y + 0.5 * node.h,
        }
    }

    static middleInsertPoint(start:Point,end:Point,points:Point[]){
        const p1=new Point(start.x,end.y);
        points.push(start,p1,end);
    }
    static doubleMiddleInsertPoint(start:Point,end:Point,points:Point[]){
        const p1=new Point(0.5*(start.x+end.x),start.y);
        const p2=new Point(0.5*(start.x+end.x),end.y);
        points.push(start,p1,p2,end);
    }

}