import {
    CurveLine,
    GraphicNode,
    GraphLineType,
    GraphLinkLine,
    IGraphicLine,
    ILineLayout,
    Point,
    SimpleLine
} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";

export class CurveLineLayout extends ILineLayout {

    type: GraphLineType = GraphLineType.Curve;

    layout(nodeMap: Map<string, GraphicNode>, linkLine: GraphLinkLine): IGraphicLine | null {
        const start = nodeMap.get(linkLine.start);
        const end = nodeMap.get(linkLine.end);
        if (!start || !end) {
            return null;
        }
        const line = new CurveLine(linkLine.id);
        const startNodeCenter = GraphicUtils.centerPoint(start);
        const endNodeCenter = GraphicUtils.centerPoint(end);
        const dx = startNodeCenter.x - endNodeCenter.x;
        const dy = startNodeCenter.y - endNodeCenter.y;
        const dxdy = Math.abs(dy) > Math.abs(dx);
        let startPoint:Point;
        let endPoint:Point;
        let isParallel=false;
        if (dx>=0 && dy>=0 && dxdy) {
            //第一象限上半区
            startPoint=GraphicUtils.topPoint(start);
            endPoint=GraphicUtils.rightPoint(end);
            isParallel=false;
        } else if (dx>=0 && dy>=0 && !dxdy) {
            //第一象限下半区
            startPoint=GraphicUtils.leftPoint(start);
            endPoint=GraphicUtils.rightPoint(end);
            isParallel=true;
        } else if (dx<0 && dy>0 && dxdy) {
            //第2象限上半区
            startPoint=GraphicUtils.topPoint(start);
            endPoint=GraphicUtils.leftPoint(end);
            isParallel=false;
        } else if (dx<0 && dy>0 && !dxdy) {
            //第2象限下半区
            startPoint=GraphicUtils.rightPoint(start);
            endPoint=GraphicUtils.leftPoint(end);
            isParallel=true;
        } else if (dx<=0 && dy<=0 && dxdy) {
            //第3象限上半区
            startPoint=GraphicUtils.bottomPoint(start);
            endPoint=GraphicUtils.leftPoint(end);
            isParallel=false;
        } else if (dx<=0 && dy<=0 && !dxdy) {
            //第3象限下半区
            startPoint=GraphicUtils.rightPoint(start);
            endPoint=GraphicUtils.leftPoint(end);
            isParallel=true;
        } else if (dx>0 && dy<0 && dxdy) {
            //第4象限上半区
            startPoint=GraphicUtils.bottomPoint(start);
            endPoint=GraphicUtils.rightPoint(end);
            isParallel=false;
        } else if (dx>0 && dy<0 && !dxdy) {
            //第4象限下半区
            startPoint=GraphicUtils.leftPoint(start);
            endPoint=GraphicUtils.rightPoint(end);
            isParallel=true;
        }else{
            //兜底
            startPoint=GraphicUtils.topPoint(start);
            endPoint=GraphicUtils.rightPoint(end);
            isParallel=false;
        }
        const rect=new GraphicNode("cache");
        rect.x=Math.min(startPoint.x,endPoint.x);
        rect.y=Math.min(startPoint.y,endPoint.y);
        rect.w=Math.max(startPoint.x,endPoint.x)-rect.x;
        rect.h=Math.max(startPoint.y,endPoint.y)-rect.y;
        //points
        if(isParallel){
            if(start.y<end.y){
                line.points.push(startPoint);
                line.points.push(GraphicUtils.topPoint(rect));
                line.points.push(GraphicUtils.centerPoint(rect));
                line.points.push(GraphicUtils.bottomPoint(rect));
                line.points.push(endPoint);
            }else{
                line.points.push(startPoint);
                line.points.push(GraphicUtils.bottomPoint(rect));
                line.points.push(GraphicUtils.centerPoint(rect));
                line.points.push(GraphicUtils.topPoint(rect));
                line.points.push(endPoint);
            }
        }else{
            if(start.y<=end.y && start.x>end.x){
                //第一象限
                line.points.push(startPoint);
                line.points.push(GraphicUtils.bottomRight(rect));
                line.points.push(endPoint);
            }else if(start.y<end.y && start.x<end.x){
                //第2象限
                line.points.push(startPoint);
                line.points.push(GraphicUtils.bottomLeft(rect));
                line.points.push(endPoint);
            }else if(start.y>=end.y && start.x<end.x){
                //第3象限
                line.points.push(startPoint);
                line.points.push(GraphicUtils.topLeft(rect));
                line.points.push(endPoint);
            }else if(start.y>end.y && start.x>end.x){
                //第4象限
                line.points.push(startPoint);
                line.points.push(GraphicUtils.topRight(rect));
                line.points.push(endPoint);
            }
        }
        //属性
        line.lArrow=linkLine.lArrow;
        line.rArrow=linkLine.rArrow;
        return line;
    }

}