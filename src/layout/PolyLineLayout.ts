import {
    GraphicNode,
    GraphLineType,
    GraphLinkLine,
    IGraphicLine,
    ILineLayout,
    Point, PolyLine,
} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";

export class PolyLineLayout extends ILineLayout {

    type: GraphLineType = GraphLineType.PolyLine;

    layout(nodeMap: Map<string, GraphicNode>, linkLine: GraphLinkLine): IGraphicLine | null {
        const start = nodeMap.get(linkLine.start);
        const end = nodeMap.get(linkLine.end);
        if (!start || !end) {
            return null;
        }
        const line = new PolyLine(linkLine.id);
        const startPoint = GraphicUtils.centerPoint(start);
        const endPoint = GraphicUtils.centerPoint(end);
        const dx = startPoint.x - endPoint.x;
        const dy = startPoint.y - endPoint.y;
        const dxdy = Math.abs(dy) > Math.abs(dx);
        const points: Point[] = [];
        if (dx >= 0 && dy >= 0 && dxdy) {
            //第一象限上半区
            GraphicUtils.middleInsertPoint(GraphicUtils.topPoint(start), GraphicUtils.rightPoint(end), points);
        } else if (dx >= 0 && dy >= 0 && !dxdy) {
            //第一象限下半区
            GraphicUtils.doubleMiddleInsertPoint(GraphicUtils.leftPoint(start), GraphicUtils.rightPoint(end), points);
        } else if (dx < 0 && dy > 0 && dxdy) {
            //第2象限上半区
            GraphicUtils.middleInsertPoint(GraphicUtils.topPoint(start), GraphicUtils.leftPoint(end), points);
        } else if (dx < 0 && dy > 0 && !dxdy) {
            //第2象限下半区
            GraphicUtils.doubleMiddleInsertPoint(GraphicUtils.rightPoint(start), GraphicUtils.leftPoint(end), points);
        } else if (dx <= 0 && dy <= 0 && dxdy) {
            //第3象限上半区
            GraphicUtils.middleInsertPoint(GraphicUtils.bottomPoint(start), GraphicUtils.leftPoint(end), points);
        } else if (dx <= 0 && dy <= 0 && !dxdy) {
            //第3象限下半区
            GraphicUtils.doubleMiddleInsertPoint(GraphicUtils.rightPoint(start), GraphicUtils.leftPoint(end), points);
        } else if (dx > 0 && dy < 0 && dxdy) {
            //第4象限上半区
            GraphicUtils.middleInsertPoint(GraphicUtils.bottomPoint(start), GraphicUtils.rightPoint(end), points);
        } else if (dx > 0 && dy < 0 && !dxdy) {
            //第4象限下半区
            GraphicUtils.doubleMiddleInsertPoint(GraphicUtils.leftPoint(start), GraphicUtils.rightPoint(end), points);
        }
        line.points=points;
        //属性
        line.lArrow=linkLine.lArrow;
        line.rArrow=linkLine.rArrow;
        line.zIndex=linkLine.zIndex;
        return line;
    }

}