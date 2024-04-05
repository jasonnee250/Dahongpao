import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {PixiStage} from "@/pixiRender/PixiStage.ts";
import {PixiGraphicNode} from "@/pixiRender/PixiGraphicNode.ts";
import {GMLApp, GMLData} from "@/entity/GMLApp.ts";
import {
    GraphicNode,
    GraphLineType,
    GraphLinkLine,
    IGraphicLine,
    ILineLayout,
    PolyLine,
    SimpleLine
} from "@/entity/graphic.ts";
import {LineLayout} from "@/layout/LineLayout.ts";
import {PolyLineLayout} from "@/layout/PolyLineLayout.ts";
import {PixiPolyLine, PixiSimpleLine} from "@/pixiRender/PixiGraphicLine.ts";

export class PixiGMLApp implements GMLApp {

    canvas:HTMLElement|null=null;
    parser: GraphicLanguageParser;
    stage: PixiStage;
    layoutMap: Map<GraphLineType, ILineLayout>;


    constructor() {
        this.parser = new GraphicLanguageParser();
        this.stage = new PixiStage();
        this.layoutMap = new Map<GraphLineType, ILineLayout>();
        this.layoutMap.set(GraphLineType.Line, new LineLayout());
        this.layoutMap.set(GraphLineType.PolyLine, new PolyLineLayout());

    }

    init(element: HTMLElement) {
        this.canvas=element;
        this.stage.init(element);
    }

    reset(): void {
        this.stage.clear();
    }

    layoutLine(nodeMap: Map<string, GraphicNode>, linkLine: GraphLinkLine): IGraphicLine | null {
        const layout = this.layoutMap.get(linkLine.type);
        if (!layout) {
            return null;
        }
        const line = layout.layout(nodeMap, linkLine);
        if (!line) {
            return null;
        }
        if (line instanceof SimpleLine) {
            return PixiSimpleLine.copyFrom(line);
        } else if (line instanceof PolyLine) {
            return PixiPolyLine.copyFrom(line);
        }
        return null;
    }

    parse2GMLData(text: string): GMLData {
        this.parser.parseString(text);
        const nodeMap = this.parser.listener.nodeMap;
        const linkMap = this.parser.listener.linkMap;
        const lineMap = new Map<string, IGraphicLine>();
        const renderNodeMap = new Map<string, GraphicNode>();
        for (const [_, node] of nodeMap) {
            const renderNode = PixiGraphicNode.copyFrom(node);
            renderNodeMap.set(renderNode.id, renderNode);
        }
        for (const [_, linkLine] of linkMap) {
            const renderLine = this.layoutLine(nodeMap, linkLine);
            if (renderLine) {
                lineMap.set(renderLine.id, renderLine);
            }
        }
        return {
            nodeMap: renderNodeMap,
            linkMap,
            lineMap,
        }
    }


    draw(text: string) {
        this.reset();
        this.parser.parseString(text);
        const nodeMap = this.parser.listener.nodeMap;
        const linkMap = this.parser.listener.linkMap;
        for (const [_, node] of nodeMap) {
            const renderNode = PixiGraphicNode.copyFrom(node);
            this.stage.container.addChild(renderNode.g);
            renderNode.draw();
        }
        for (const [_, linkLine] of linkMap) {
            const renderLine = this.layoutLine(nodeMap, linkLine);
            if (renderLine) {
                // @ts-ignore
                this.stage.container.addChild(renderLine.g);
                renderLine.draw();
            }
        }
    }

    drawData(nodeMap: Map<string, GraphicNode>, lineMap: Map<string, IGraphicLine>): void {
        for (const [_, node] of nodeMap) {
            node.draw();
        }
        for (const [_, node] of lineMap) {
            node.draw();
        }
    }

    resetTransform(): void {
        this.stage.container.scale = {x: 1, y: 1};
        this.stage.container.x = 0;
        this.stage.container.y = 0;
    }

    scale(sx: number, sy: number): void {
        this.stage.container.scale.x = this.stage.container.scale.x * sx;
        this.stage.container.scale.y = this.stage.container.scale.y * sy;
    }

    translation(dx: number, dy: number): void {
        this.stage.container.x += dx;
        this.stage.container.x += dy;
    }
}