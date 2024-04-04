import {GraphicNode, GraphLineType, GraphLinkLine, IGraphicLine, ILineLayout, SimpleLine} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";

export class LineLayout extends ILineLayout {

    type: GraphLineType = GraphLineType.Line;

    layout(nodeMap: Map<string, GraphicNode>, linkLine: GraphLinkLine): IGraphicLine | null {
        const start = nodeMap.get(linkLine.start);
        const end = nodeMap.get(linkLine.end);
        if (!start || !end) {
            return null;
        }
        const line = new SimpleLine(linkLine.id);
        const startPoint = GraphicUtils.centerPoint(start);
        const endPoint = GraphicUtils.centerPoint(end);
        const dx = startPoint.x - endPoint.x;
        const dy = startPoint.y - endPoint.y;
        const dxdy = Math.abs(dy) > Math.abs(dx);
        if (dx>=0 && dy>=0 && dxdy) {
            //第一象限上半区
            line.start=GraphicUtils.topPoint(start);
            line.end=GraphicUtils.rightPoint(end);
        } else if (dx>=0 && dy>=0 && !dxdy) {
            //第一象限下半区
            line.start=GraphicUtils.leftPoint(start);
            line.end=GraphicUtils.rightPoint(end);
        } else if (dx<0 && dy>0 && dxdy) {
            //第2象限上半区
            line.start=GraphicUtils.topPoint(start);
            line.end=GraphicUtils.leftPoint(end);
        } else if (dx<0 && dy>0 && !dxdy) {
            //第2象限下半区
            line.start=GraphicUtils.rightPoint(start);
            line.end=GraphicUtils.leftPoint(end);
        } else if (dx<=0 && dy<=0 && dxdy) {
            //第3象限上半区
            line.start=GraphicUtils.bottomPoint(start);
            line.end=GraphicUtils.leftPoint(end);
        } else if (dx<=0 && dy<=0 && !dxdy) {
            //第3象限下半区
            line.start=GraphicUtils.rightPoint(start);
            line.end=GraphicUtils.leftPoint(end);
        } else if (dx>0 && dy<0 && dxdy) {
            //第4象限上半区
            line.start=GraphicUtils.bottomPoint(start);
            line.end=GraphicUtils.rightPoint(end);
        } else if (dx>0 && dy<0 && !dxdy) {
            //第4象限下半区
            line.start=GraphicUtils.leftPoint(start);
            line.end=GraphicUtils.rightPoint(end);
        }
        return line;
    }

}