import {GraphicNode} from "@/entity";

// @ts-ignore
export default function ellipseDraw(node: GraphicNode, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#' + node.color.toString(16);
    ctx.globalAlpha = node.alpha;
    ctx.beginPath();
    ctx.ellipse(node.x + 0.5 * node.w, node.y + 0.5 * node.h, 0.5 * node.w, 0.5 * node.h, 0, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = '#' + node.borderColor.toString(16);
    ctx.lineWidth = node.borderWidth;
    ctx.globalAlpha = node.borderAlpha;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


}