import {PolyLine, SimpleLine} from "@/entity/graphic.ts";
import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";

export class CanvasSimpleLine extends SimpleLine {

    static copyFrom(node: SimpleLine): CanvasSimpleLine {
        const graphNode = new CanvasSimpleLine(node.id);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    draw() {
        const canvas = document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
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

    static copyFrom(node: PolyLine): CanvasPolyLine {
        const graphNode = new CanvasPolyLine(node.id);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    draw() {
        if (this.points.length < 2) {
            return;
        }
        const start = this.points[0];
        const canvas = document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
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