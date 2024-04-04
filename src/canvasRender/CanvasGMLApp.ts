import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {CanvasStage} from "@/canvasRender/CanvasStage.ts";
import {CanvasGraphicNode} from "@/canvasRender/CanvasGraphicNode.ts";
import {
    GraphicNode,
    GraphLineType,
    GraphLinkLine,
    IGraphicLine,
    ILineLayout,
    PolyLine,
    SimpleLine,
    TransformMatrix
} from "@/entity/graphic.ts";
import {CanvasPolyLine, CanvasSimpleLine} from "@/canvasRender/CanvasGraphicLine.ts";
import {LineLayout} from "@/layout/LineLayout.ts";
import {PolyLineLayout} from "@/layout/PolyLineLayout.ts";
import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";
import {GMLApp, GMLData} from "@/entity/GMLApp.ts";

/**
 * 主管渲染的GMLApp
 */
export class CanvasGMLApp implements GMLApp {
    parser: GraphicLanguageParser;
    stage: CanvasStage;
    layoutMap: Map<GraphLineType, ILineLayout>;

    globalTransform: TransformMatrix = new TransformMatrix();

    constructor() {
        this.parser = new GraphicLanguageParser();
        this.stage = new CanvasStage();
        this.layoutMap = new Map<GraphLineType, ILineLayout>();
        this.layoutMap.set(GraphLineType.Line, new LineLayout());
        this.layoutMap.set(GraphLineType.PolyLine, new PolyLineLayout());
        this.globalTransform.a = window.devicePixelRatio;
        this.globalTransform.d = window.devicePixelRatio;
    }

    init(element: HTMLElement) {
        this.stage.init(element);
    }

    reset() {
        this.stage.clear();
        const canvas = document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
        const {a, b, c, d, e, f} = this.globalTransform;
        ctx.transform(a, b, c, d, e, f);
    }

    layoutLine(nodeMap:Map<string,GraphicNode>, linkLine:GraphLinkLine):IGraphicLine|null{
        const layout = this.layoutMap.get(linkLine.type);
        if (!layout) {
            return null;
        }
        const line = layout.layout(nodeMap, linkLine);
        if (!line) {
            return null;
        }
        if (line instanceof SimpleLine) {
            return CanvasSimpleLine.copyFrom(line);
        } else if (line instanceof PolyLine) {
            return CanvasPolyLine.copyFrom(line);
        }
        return null;
    }

    parse2GMLData(text: string): GMLData {
        this.parser.parseString(text);
        const nodeMap=this.parser.listener.nodeMap;
        const linkMap=this.parser.listener.linkMap;
        const lineMap=new Map<string,IGraphicLine>();
        const renderNodeMap=new Map<string,GraphicNode>();
        for (const [_, node] of nodeMap) {
            const renderNode = CanvasGraphicNode.copyFrom(node);
            renderNodeMap.set(renderNode.id,renderNode);
        }
        for (const [_, linkLine] of linkMap) {
            const renderLine=this.layoutLine(nodeMap,linkLine);
            if(renderLine){
                lineMap.set(renderLine.id,renderLine);
            }
        }
        return {
            nodeMap:renderNodeMap,
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
            const renderNode = CanvasGraphicNode.copyFrom(node);
            renderNode.draw();
        }
        for (const [_, linkLine] of linkMap) {
            const renderLine=this.layoutLine(nodeMap,linkLine);
            if(renderLine){
                renderLine.draw();
            }
        }
    }

    drawData(nodeMap: Map<string, GraphicNode>, lineMap: Map<string, IGraphicLine>) {
        this.reset();
        for (const [_, node] of nodeMap) {
            node.draw();
        }
        for (const [_, node] of lineMap) {
            node.draw();
        }
    }

    scale(sx:number,sy:number):void{
        this.globalTransform.a*=sx;
        this.globalTransform.d*=sy;
    }

    translation(dx:number,dy:number):void{
        this.globalTransform.e*=dx;
        this.globalTransform.f*=dy;
    }

    resetTransform():void{
        this.globalTransform=new TransformMatrix();
        this.globalTransform.a = window.devicePixelRatio;
        this.globalTransform.d = window.devicePixelRatio;
    }

}