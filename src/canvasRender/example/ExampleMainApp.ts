import {CanvasGMLApp} from "@/canvasRender/CanvasGMLApp.ts";
import {GraphicNode, GraphLinkLine, IGraphicElement, IGraphicLine, Point, TreeNode} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";
import RBush from "rbush";

export class ExampleMainApp {
    gmlApp: CanvasGMLApp;//渲染
    nodeMap: Map<string, GraphicNode>;
    linkMap: Map<string, GraphLinkLine>;
    lineMap: Map<string, IGraphicLine>;

    targetNode: GraphicNode | null = null;
    relatedLinks: Set<string>;

    lastPos: Point = new Point(0, 0);
    //r树
    tree = new RBush<TreeNode>();

    constructor() {
        this.gmlApp = new CanvasGMLApp();
        this.nodeMap = new Map();
        this.linkMap = new Map();
        this.lineMap = new Map();
        this.relatedLinks = new Set<string>();
    }

    private getGlobalPoint(event: PointerEvent): Point {
        const rect = this.gmlApp.canvas?.getBoundingClientRect()!;//document.getElementById(NORMAL_CANVAS_ID)!.getBoundingClientRect();
        const point = new Point(event.clientX - rect.x, event.clientY - rect.y);
        point.x = point.x * window.devicePixelRatio;
        point.y = point.y * window.devicePixelRatio;
        const {a, d, e, f} = this.gmlApp.globalTransform;
        point.x = point.x / a - e / a;
        point.y = point.y / d - f / d;
        return point;
    }

    start(): void {
        document.addEventListener("pointerdown", this.onPointerDown);
        document.addEventListener("pointermove", this.onPointerMove);
        document.addEventListener("pointerup", this.onPointerUp);
        document.addEventListener("wheel", this.onWheel, {passive: false});
    }

    stop(): void {
        document.removeEventListener("pointerdown", this.onPointerDown);
        document.removeEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
        document.removeEventListener("wheel", this.onWheel);
    }

    parse(text: string): void {
        if (text === "") {
            return;
        }
        this.tree.clear();
        const {lineMap, linkMap, nodeMap} = this.gmlApp.parse2GMLData(text);
        this.nodeMap = nodeMap;
        this.lineMap = lineMap;
        this.linkMap = linkMap;
        this.addToRTree();
        this.gmlApp.drawData(this.nodeMap, this.lineMap);
    }

    private addToRTree() {
        for (const [_id, node] of this.nodeMap) {
            this.tree.insert(node.getTreeNode());
        }
        for (const [_id, node] of this.lineMap) {
            this.tree.insert(node.getTreeNode());
        }
    }

    private relatedLinkLine(node: GraphicNode): void {
        //更新与之相关的linkLine
        for (const [_, link] of this.linkMap) {
            if (link.start === node.id) {
                this.relatedLinks.add(link.id);
            }
            if (link.end === node.id) {
                this.relatedLinks.add(link.id);
            }
        }
        for(const link of this.relatedLinks){
            const line=this.lineMap.get(link);
            if(line){
                //r tree剔除
                this.tree.remove(line.getTreeNode(), (a: TreeNode, b: TreeNode) => {
                    return a.id === b.id;
                })
            }
        }
    }

    onWheel = (event: WheelEvent) => {
        if (event.target === this.gmlApp.canvas) {
            event.preventDefault();
        } else {
            return;
        }
        if (event.ctrlKey) {
            const delta = Math.abs(event.deltaY) / 100;
            const scale = event.deltaY > 0 ? (1 - delta) : (1 + delta);
            this.gmlApp.scale(scale, scale);
            this.redraw();
            //缩放
            return;
        }
        //平移
        this.gmlApp.translation(-event.deltaX, -event.deltaY);
        this.redraw();
    }

    onPointerDown = (event: PointerEvent) => {
        const globalPoint = this.getGlobalPoint(event);
        for (const [_, node] of this.nodeMap) {
            if (GraphicUtils.rectContains(globalPoint, node)) {
                this.targetNode = node;
                this.lastPos = globalPoint;
                this.relatedLinkLine(this.targetNode);
                //r tree剔除
                this.tree.remove(node.getTreeNode(), (a: TreeNode, b: TreeNode) => {
                    return a.id === b.id;
                })
                break;
            }
        }
    }
    onPointerMove = (event: PointerEvent) => {
        if (!this.targetNode) {
            return;
        }
        const globalPoint = this.getGlobalPoint(event);
        const delta = new Point(globalPoint.x - this.lastPos.x, globalPoint.y - this.lastPos.y);
        const prev = this.targetNode.getTreeNode();
        //更新
        this.targetNode.x += delta.x;
        this.targetNode.y += delta.y;
        this.lastPos = globalPoint;
        //整理脏区bounds
        const dirtyBounds: TreeNode[] = [];
        const current = this.targetNode.getTreeNode();
        dirtyBounds.push(prev);
        dirtyBounds.push(current);

        //关联连线重绘
        for (const link of this.relatedLinks) {
            const prevLine = this.lineMap.get(link);
            if (prevLine) {
                const bounds = prevLine.getTreeNode();
                dirtyBounds.push(bounds);
            }
            const linkLine=this.linkMap.get(link);
            if(!linkLine){
                continue;
            }
            const line = this.gmlApp.layoutLine(this.nodeMap, linkLine);
            if (line) {
                this.lineMap.set(line.id, line);
                const bounds = line.getTreeNode();
                dirtyBounds.push(bounds);
            }
        }

        const bounds = GraphicUtils.getBounds(dirtyBounds);
        this.dirtyDraw(bounds);
    }

    private dirtyDraw(bounds: TreeNode) {
        const buffer = 0;
        //像素整数化处理
        const scale = this.gmlApp.globalTransform.a / 2;
        bounds.minX = Math.round((bounds.minX - buffer) * scale) / scale;
        bounds.minY = Math.round((bounds.minY - buffer) * scale) / scale;
        bounds.maxX = Math.round((bounds.maxX + 2 * buffer) * scale) / scale;
        bounds.maxY = Math.round((bounds.maxY + 2 * buffer) * scale) / scale;
        const result = this.tree.search(bounds);
        const ctx = this.gmlApp.canvas!.getContext("2d")!;
        //清空；
        ctx.clearRect(bounds.minX, bounds.minY, bounds.maxX - bounds.minX, bounds.maxY - bounds.minY);
        ctx.save();
        ctx.beginPath();
        ctx.rect(bounds.minX, bounds.minY, bounds.maxX - bounds.minX, bounds.maxY - bounds.minY);
        ctx.clip();
        //整理需要重新绘制的对象
        const graphicSet = new Set<IGraphicElement>();
        for (const treeNode of result) {
            const node = this.nodeMap.get(treeNode.id);
            if (node) {
                graphicSet.add(node);
            }
            const line = this.lineMap.get(treeNode.id);
            if (line) {
                graphicSet.add(line);
            }
        }
        for(const lineId of this.relatedLinks){
            const line = this.lineMap.get(lineId);
            if (line) {
                graphicSet.add(line);
            }
        }
        graphicSet.add(this.targetNode!);
        for(const graphic of graphicSet){
            graphic.draw();
        }
        ctx.restore();
    }

    onPointerUp = (_: PointerEvent) => {
        if (this.targetNode) {
            //r tree更新
            this.tree.insert(this.targetNode.getTreeNode());
        }
        for(const link of this.relatedLinks){
            const line=this.lineMap.get(link);
            if(line){
                //r tree剔除
                this.tree.insert(line.getTreeNode());
            }
        }
        this.targetNode = null;
        this.relatedLinks.clear();
        this.lastPos.x = 0;
        this.lastPos.y = 0;
    }

    redraw() {
        this.gmlApp.drawData(this.nodeMap, this.lineMap);
    }
}