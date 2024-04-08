//类型
import {GraphicUtils} from "@/entity/GraphicUtils.ts";

export const DEFAULT_ARROW_LENGTH = 10;

export enum GraphicNodeType {
    Rect,
    Circle,
    Diamond,
    Parallelogram,
    Trapezoid,
    Triangle,
}

export enum GraphLineType {
    Line,
    PolyLine,
    Curve,
}

export enum LineArrowType {
    None,
    Arrow,
}

export class Point {
    x: number = 0;
    y: number = 0;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}

export class TransformMatrix {
    a: number = 1;
    b: number = 0;
    c: number = 0;
    d: number = 1;
    e: number = 0;
    f: number = 0;
}

export interface TreeNode {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    id: string;
}

export interface IGraphicElement {
    zIndex: number;

    draw(): void;
}

export class GraphicNode implements IGraphicElement {
    type: GraphicNodeType = GraphicNodeType.Rect;
    id: string;
    x: number = 0;
    y: number = 0;
    w: number = 100;
    h: number = 50;
    angle: number = 0;
    color: number = 0xFBFBFB;
    text: string = "";
    alpha: number = 1;
    borderWidth: number = 1;
    borderColor: number = 0x000000;
    borderAlpha: number = 1;
    fontColor: number = 0x000000;
    fontSize: number = 14;
    zIndex: number = 0;//用于层级排序

    constructor(id: string) {
        this.id = id;
    }

    draw(): void {
    }

    getTreeNode(): TreeNode {
        return {
            id: this.id,
            minX: this.x - this.borderWidth,
            minY: this.y - this.borderWidth,
            maxX: this.x + this.w + 2 * this.borderWidth,
            maxY: this.y + this.h + 2 * this.borderWidth,
        }
    }
}

export class GraphLinkLine {
    id: string;
    start: string = "";
    end: string = "";
    lArrow: LineArrowType = LineArrowType.None;
    rArrow: LineArrowType = LineArrowType.None;
    type: GraphLineType = GraphLineType.PolyLine;
    zIndex:number=0;

    constructor(id: string) {
        this.id = id;
    }
}

export abstract class IGraphicLine implements IGraphicElement {
    id: string;
    color: number = 0x000000;
    alpha: number = 1;
    width: number = 1;
    fontColor: number = 0x000000;
    fontSize: number = 14;
    lArrow: LineArrowType = LineArrowType.None;
    rArrow: LineArrowType = LineArrowType.None;
    zIndex: number = 0;//用于层级排序

    constructor(id: string) {
        this.id = id;
    }

    abstract draw(): void;

    abstract getTreeNode(): TreeNode;

}

export class CurveLine extends IGraphicLine {

    points: Point[] = [];

    draw() {
    }

    getTreeNode(): TreeNode {
        const bounds = GraphicUtils.getBoundsByPoints(this.points);
        bounds.minX = bounds.minX - this.width;
        bounds.minY = bounds.minY - this.width;
        bounds.maxX = bounds.maxX + 2 * this.width;
        bounds.maxY = bounds.maxY + 2 * this.width;
        bounds.id = this.id;
        return bounds;
    }

}

//折线
export class PolyLine extends IGraphicLine {
    points: Point[] = [];

    draw(): void {
    };

    getTreeNode(): TreeNode {
        const bounds = GraphicUtils.getBoundsByPoints(this.points);
        bounds.minX = bounds.minX - this.width;
        bounds.minY = bounds.minY - this.width;
        bounds.maxX = bounds.maxX + 2 * this.width;
        bounds.maxY = bounds.maxY + 2 * this.width;
        bounds.id = this.id;
        return bounds;
    }
}

//直线
export class SimpleLine extends IGraphicLine {
    start: Point = new Point(0, 0);
    end: Point = new Point(0, 0);

    draw() {
    }

    getTreeNode(): TreeNode {
        const bounds = GraphicUtils.getBoundsByPoints([this.start, this.end]);
        bounds.minX = bounds.minX - this.width;
        bounds.minY = bounds.minY - this.width;
        bounds.maxX = bounds.maxX + 2 * this.width;
        bounds.maxY = bounds.maxY + 2 * this.width;
        bounds.id = this.id;
        return bounds;
    }
}

export abstract class ILineLayout {
    abstract type: GraphLineType;

    abstract layout(nodeMap: Map<string, GraphicNode>, linkLine: GraphLinkLine): IGraphicLine | null;
}