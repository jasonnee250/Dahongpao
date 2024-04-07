import {GraphicNode, GraphicUtils} from "@/entity";


// @ts-ignore
export default function diamondDraw(node: GraphicNode, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#' + node.color.toString(16);
    ctx.globalAlpha = node.alpha;
    ctx.strokeStyle = '#' + node.borderColor.toString(16);
    ctx.lineWidth = node.borderWidth;
    ctx.globalAlpha = node.borderAlpha;
    ctx.beginPath();

    const a = GraphicUtils.leftPoint(node);
    const b = GraphicUtils.topPoint(node);
    const c = GraphicUtils.rightPoint(node);
    const d = GraphicUtils.bottomPoint(node);

    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


}
