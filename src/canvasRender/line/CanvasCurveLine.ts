import {CurveLine, DEFAULT_ARROW_LENGTH, GraphicUtils, LineArrowType, TreeNode} from "@/entity";

export class CanvasCurveLine extends CurveLine {

    graphicContext: CanvasRenderingContext2D;

    static copyFrom(node: CurveLine, graphicContext: CanvasRenderingContext2D): CanvasCurveLine {
        const graphNode = new CanvasCurveLine(node.id, graphicContext);
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
        if (this.points.length < 3) {
            return;
        }
        let start = this.points[0];
        const ctx = this.graphicContext;
        ctx.beginPath();
        ctx.strokeStyle = '#' + this.color.toString(16);
        ctx.globalAlpha = this.alpha;
        ctx.lineWidth = this.width;
        for (let i = 1; i < this.points.length - 1; i = i + 2) {
            ctx.moveTo(start.x, start.y);
            const p1 = this.points[i];
            const p2 = this.points[i + 1];
            start = p2;
            ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
        }
        ctx.lineJoin = 'round';
        this.drawArrow(ctx);
        ctx.stroke();
    }

    private drawArrow(ctx: CanvasRenderingContext2D) {
        if (this.points.length < 3) {
            return;
        }
        if (this.rArrow) {
            const n = this.points.length;
            const start = this.points[n - 2];
            const end = this.points[n - 1];
            const {a, b} = GraphicUtils.getRArrowPoint(start, end, DEFAULT_ARROW_LENGTH);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(end.x, end.y);
            ctx.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const start = this.points[0];
            const end = this.points[1];
            const {a, b} = GraphicUtils.getLArrowPoint(start, end, DEFAULT_ARROW_LENGTH);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(start.x, start.y);
            ctx.lineTo(b.x, b.y);
        }
    }

    getTreeNode(): TreeNode {
        const points=[...this.points];
        //左箭头
        if(this.lArrow===LineArrowType.Arrow){
            const start = this.points[0];
            const end = this.points[1];
            const {a, b} = GraphicUtils.getLArrowPoint(start, end, DEFAULT_ARROW_LENGTH);
            points.push(a,b);
        }
        if(this.rArrow===LineArrowType.Arrow){
            const n = this.points.length;
            const start = this.points[n - 2];
            const end = this.points[n - 1];
            const {a, b} = GraphicUtils.getRArrowPoint(start, end, DEFAULT_ARROW_LENGTH);
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