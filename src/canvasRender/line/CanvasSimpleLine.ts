import {DEFAULT_ARROW_LENGTH, LineArrowType, SimpleLine, TreeNode} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity";

export class CanvasSimpleLine extends SimpleLine {

    graphicContext: CanvasRenderingContext2D;

    static copyFrom(node: SimpleLine, graphicContext: CanvasRenderingContext2D): CanvasSimpleLine {
        const graphNode = new CanvasSimpleLine(node.id, graphicContext);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    constructor(id: string, graphicContext: CanvasRenderingContext2D) {
        super(id);
        this.graphicContext = graphicContext;
    }

    draw() {
        const ctx = this.graphicContext;
        ctx.beginPath();
        ctx.strokeStyle = '#' + this.color.toString(16);
        ctx.globalAlpha = this.alpha;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        this.drawArrow(ctx);
        ctx.stroke();
        //arrow
    }

    private drawArrow(ctx: CanvasRenderingContext2D) {
        if (this.rArrow) {
            const {a, b} = GraphicUtils.getRArrowPoint(this.start, this.end, DEFAULT_ARROW_LENGTH);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(this.end.x, this.end.y);
            ctx.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const {a, b} = GraphicUtils.getLArrowPoint(this.start, this.end, DEFAULT_ARROW_LENGTH);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(this.start.x, this.start.y);
            ctx.lineTo(b.x, b.y);
        }
    }

    getTreeNode(): TreeNode {
        const points=[this.start,this.end];
        //左箭头
        if(this.lArrow===LineArrowType.Arrow){
            const {a, b} = GraphicUtils.getLArrowPoint(this.start, this.end, DEFAULT_ARROW_LENGTH);
            points.push(a,b);
        }
        if(this.rArrow===LineArrowType.Arrow){
            const {a, b} = GraphicUtils.getRArrowPoint(this.start, this.end, DEFAULT_ARROW_LENGTH);
            points.push(a,b);
        }
        const bounds = GraphicUtils.getBoundsByPoints(points);
        bounds.minX = bounds.minX - this.width;
        bounds.minY = bounds.minY - this.width;
        bounds.maxX = bounds.maxX + 2 * this.width;
        bounds.maxY = bounds.maxY + 2 * this.width;
        bounds.id = this.id;
        return bounds;
    }
}

