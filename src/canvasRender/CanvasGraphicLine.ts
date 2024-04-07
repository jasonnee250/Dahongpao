import {CurveLine, PolyLine, SimpleLine} from "@/entity/graphic.ts";
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
        const l = 10;
        if (this.rArrow) {
            const {a, b} = GraphicUtils.getRArrowPoint(this.start, this.end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(this.end.x, this.end.y);
            ctx.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const {a, b} = GraphicUtils.getLArrowPoint(this.start, this.end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(this.start.x, this.start.y);
            ctx.lineTo(b.x, b.y);
        }
    }
}

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
        const l = 10;
        if (this.rArrow) {
            const n = this.points.length;
            const start = this.points[n - 2];
            const end = this.points[n - 1];
            const {a, b} = GraphicUtils.getRArrowPoint(start, end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(end.x, end.y);
            ctx.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const start = this.points[0];
            const end = this.points[1];
            const {a, b} = GraphicUtils.getLArrowPoint(start, end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(start.x, start.y);
            ctx.lineTo(b.x, b.y);
        }
    }
}


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
        const l = 10;
        if (this.rArrow) {
            const n = this.points.length;
            const start = this.points[n - 2];
            const end = this.points[n - 1];
            const {a, b} = GraphicUtils.getRArrowPoint(start, end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(end.x, end.y);
            ctx.lineTo(b.x, b.y);
        }
        if (this.lArrow) {
            const start = this.points[0];
            const end = this.points[1];
            const {a, b} = GraphicUtils.getLArrowPoint(start, end, l);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(start.x, start.y);
            ctx.lineTo(b.x, b.y);
        }
    }
}