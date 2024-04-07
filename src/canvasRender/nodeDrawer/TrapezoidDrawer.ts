import {GraphicNode, Point} from "@/entity";

export default function trapezoidDraw(node: GraphicNode, ctx: CanvasRenderingContext2D):
    void {
    ctx.fillStyle = '#' + node.color.toString(16);
    ctx.globalAlpha = node.alpha;
    ctx.strokeStyle = '#' + node.borderColor.toString(16);
    ctx.lineWidth = node.borderWidth;
    ctx.globalAlpha = node.borderAlpha;
    ctx.beginPath();

    const delta = 0.2 * node.w;

    const a = new Point(node.x + delta, node.y);
    const b = new Point(node.x + node.w - delta, node.y);
    const d = new Point(node.x, node.y + node.h);
    const c = new Point(node.x + node.w, node.y + node.h);

    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}