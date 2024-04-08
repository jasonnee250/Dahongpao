import {DEFAULT_ARROW_LENGTH, GraphicUtils, LineArrowType, PolyLine, TreeNode} from "@/entity";

export class CanvasPolyLine extends PolyLine {

    graphicContext: CanvasRenderingContext2D;

    static copyFrom(node: PolyLine, graphicContext: CanvasRenderingContext2D): CanvasPolyLine {
        const graphNode = new CanvasPolyLine(node.id, graphicContext);
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
        if (this.points.length < 2) {
            return;
        }
        const start = this.points[0];
        const ctx = this.graphicContext;
        ctx.beginPath();
        ctx.strokeStyle = '#' + this.color.toString(16);
        ctx.globalAlpha = this.alpha;
        ctx.lineWidth = this.width;
        ctx.moveTo(start.x, start.y);
        for (let i = 1; i < this.points.length; i++) {
            const p = this.points[i];
            ctx.lineTo(p.x, p.y);
        }
        ctx.lineJoin = 'round';
        this.drawArrow(ctx);
        ctx.stroke();
    }

    private drawArrow(ctx: CanvasRenderingContext2D) {
        if (this.points.length < 2) {
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
        const boundsList:TreeNode[]=[];
        const bounds = super.getTreeNode();
        boundsList.push(bounds);
        //左箭头
        if(this.lArrow===LineArrowType.Arrow){
            boundsList.push({
                id:'lArrow',
                minX:this.points[0].x-DEFAULT_ARROW_LENGTH,
                minY:this.points[0].y-DEFAULT_ARROW_LENGTH,
                maxX:this.points[0].x+DEFAULT_ARROW_LENGTH,
                maxY:this.points[0].y+DEFAULT_ARROW_LENGTH,
            })
        }
        if(this.rArrow===LineArrowType.Arrow){
            const n = this.points.length;
            boundsList.push({
                id:'lArrow',
                minX:this.points[n - 1].x-DEFAULT_ARROW_LENGTH,
                minY:this.points[n - 1].y-DEFAULT_ARROW_LENGTH,
                maxX:this.points[n - 1].x+DEFAULT_ARROW_LENGTH,
                maxY:this.points[n - 1].y+DEFAULT_ARROW_LENGTH,
            })
        }
        return GraphicUtils.getBounds(boundsList,this.id);
    }
}