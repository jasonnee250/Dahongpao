import {GraphicNode, GraphLinkLine, IGraphicLine, Point, PolyLine, SimpleLine} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";
import {PixiGMLApp} from "@/pixiRender/PixiGMLApp.ts";

export class ExampleMainApp {
    gmlApp: PixiGMLApp;//渲染
    nodeMap: Map<string, GraphicNode>;
    linkMap: Map<string, GraphLinkLine>;
    lineMap: Map<string, IGraphicLine>;

    targetNode: GraphicNode | null = null;
    relatedLinks: Set<GraphLinkLine>;

    lastPos: Point = new Point(0, 0);

    constructor() {
        this.gmlApp = new PixiGMLApp();
        this.nodeMap = new Map();
        this.linkMap = new Map();
        this.lineMap = new Map();
        this.relatedLinks = new Set<GraphLinkLine>();
    }

    private getGlobalPoint(event: PointerEvent): Point {
        const rect=this.gmlApp.canvas?.getBoundingClientRect()!;//document.getElementById(NORMAL_CANVAS_ID)!.getBoundingClientRect();

        const point = new Point(event.clientX - rect.x, event.clientY-rect.y);
        point.x = point.x * window.devicePixelRatio;
        point.y = point.y * window.devicePixelRatio;
        const matrix = this.gmlApp.stage.container.worldTransform;
        const {a, d, tx, ty} = matrix;
        point.x = point.x / a - tx / a;
        point.y = point.y / d - ty / d;
        return point;
    }

    start(): void {
        document.addEventListener("pointerdown", this.onPointerDown);
        document.addEventListener("pointermove", this.onPointerMove);
        document.addEventListener("pointerup", this.onPointerUp);
    }

    stop(): void {
        document.removeEventListener("pointerdown", this.onPointerDown);
        document.removeEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
    }

    parse(text: string): void {
        this.gmlApp.reset();
        if (text === "") {
            return;
        }
        const {lineMap, linkMap, nodeMap} = this.gmlApp.parse2GMLData(text);
        this.nodeMap = nodeMap;
        this.lineMap = lineMap;
        this.linkMap = linkMap;
        this.addToCantanier();
        this.gmlApp.drawData(this.nodeMap, this.lineMap);
    }

    private addToCantanier(): void {
        for (const [_, node] of this.nodeMap) {
            this.gmlApp.stage.container.addChild(node.g);
        }
        for (const [_, node] of this.lineMap) {
            this.gmlApp.stage.container.addChild(node.g);
        }
    }

    private relatedLinkLine(node: GraphicNode): void {
        //更新与之相关的linkLine
        for (const [_, link] of this.linkMap) {
            if (link.start === node.id) {
                this.relatedLinks.add(link);
            }
            if (link.end === node.id) {
                this.relatedLinks.add(link);
            }
        }
    }

    onPointerDown = (event: PointerEvent) => {
        const globalPoint = this.getGlobalPoint(event);
        for (const [_, node] of this.nodeMap) {
            if (GraphicUtils.rectContains(globalPoint, node)) {
                this.targetNode = node;
                this.lastPos = globalPoint;
                this.relatedLinkLine(this.targetNode);
                break;
            }
        }
    }
    onPointerMove = (event: PointerEvent) => {
        if (!this.targetNode) {
            return;
        }
        const globalPoint = this.getGlobalPoint(event);
        this.targetNode.x += globalPoint.x - this.lastPos.x;
        this.targetNode.y += globalPoint.y - this.lastPos.y;
        this.lastPos = globalPoint;

        for (const link of this.relatedLinks) {
            const line = this.gmlApp.layoutLine(this.nodeMap, link);
            if (line && this.lineMap.has(line.id)) {
                const renderLine = this.lineMap.get(line.id)!;
                if (renderLine instanceof PolyLine) {
                    (renderLine as PolyLine).points = line.points;
                } else if (renderLine instanceof SimpleLine) {
                    (renderLine as SimpleLine).start = line.start;
                    (renderLine as SimpleLine).end = line.end;
                }
            }
        }

        this.gmlApp.drawData(this.nodeMap, this.lineMap);
    }
    onPointerUp = (_: PointerEvent) => {
        this.targetNode = null;
        this.relatedLinks.clear();
        this.lastPos.x = 0;
        this.lastPos.y = 0;
    }

    redraw() {
        this.gmlApp.drawData(this.nodeMap, this.lineMap);
    }
}