import {GraphicNode, GraphicNodeType, TreeNode} from "@/entity/graphic.ts";
import rectDraw from "@/canvasRender/nodeDrawer/RectDrawer.ts";
import ellipseDraw from "@/canvasRender/nodeDrawer/EllipseDrawer.ts";
import trianglDeraw from "@/canvasRender/nodeDrawer/TriangleDrawer.ts";
import diamondDraw from "@/canvasRender/nodeDrawer/DiamondDrawer.ts";
import parallelogramDraw from "@/canvasRender/nodeDrawer/ParallelogramDrawer.ts";
import trapezoidDraw from "@/canvasRender/nodeDrawer/TrapezoidDrawer.ts";
import {GraphicUtils} from "@/entity";

export class CanvasGraphicNode extends GraphicNode {

    graphicContext: CanvasRenderingContext2D;

    static copyFrom(node: GraphicNode, ctx: CanvasRenderingContext2D): CanvasGraphicNode {
        const graphNode = new CanvasGraphicNode(node.id, ctx);
        const keys = Object.keys(node);
        for (const key of keys) {
            // @ts-ignore
            graphNode[key] = node[key];
        }
        return graphNode;
    }

    constructor(id: string, ctx: CanvasRenderingContext2D) {
        super(id);
        this.graphicContext = ctx;
    }

    draw(): void {
        switch (this.type) {
            case GraphicNodeType.Circle:
                ellipseDraw(this, this.graphicContext);
                break;
            case GraphicNodeType.Diamond:
                diamondDraw(this, this.graphicContext);
                break;
            case GraphicNodeType.Parallelogram:
                parallelogramDraw(this, this.graphicContext);
                break;
            case GraphicNodeType.Trapezoid:
                trapezoidDraw(this, this.graphicContext);
                break;
            case GraphicNodeType.Triangle:
                trianglDeraw(this, this.graphicContext);
                break;
            case GraphicNodeType.Rect:
            default:
                rectDraw(this, this.graphicContext);
        }
        this.drawText(this.graphicContext);
    }

    drawText(ctx: CanvasRenderingContext2D) {
        const textFill = '#' + this.fontColor.toString(16);
        ctx.fillStyle = textFill === '#0' ? '#000000' : textFill;
        ctx.globalAlpha = 1;
        ctx.font = this.fontSize.toString() + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.x + 0.5 * this.w, this.y + 0.5 * this.h);
    }

    getTreeNode(): TreeNode {
        const bounds: TreeNode = super.getTreeNode();
        if (this.text === "") {
            return bounds;
        }
        this.graphicContext.font = this.fontSize.toString() + 'px Arial';
        const result = this.graphicContext.measureText(this.text);
        const width = result.width;
        const height = result.actualBoundingBoxAscent + result.actualBoundingBoxDescent;
        const center = GraphicUtils.centerPoint(this);
        const treeBounds: TreeNode = {
            id:"text",
            minX: center.x - 0.5 * width,
            maxX: center.x + 0.5 * width,
            minY: center.y - 0.5 * height,
            maxY: center.y + 0.5 * height,
        }
        return GraphicUtils.getBounds([bounds,treeBounds],this.id);
    }
}