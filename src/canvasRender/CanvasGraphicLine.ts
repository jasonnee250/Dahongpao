import {PolyLine, SimpleLine} from "@/entity/graphic.ts";

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
        const ctx=this.graphicContext;
        ctx.beginPath();
        ctx.strokeStyle = '#' + this.color.toString(16);
        ctx.globalAlpha = this.alpha;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
}

export class CanvasPolyLine extends PolyLine {

    graphicContext: CanvasRenderingContext2D;
    static copyFrom(node: PolyLine,graphicContext: CanvasRenderingContext2D): CanvasPolyLine {
        const graphNode = new CanvasPolyLine(node.id,graphicContext);
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
        const ctx=this.graphicContext;
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
        ctx.stroke();
    }
}