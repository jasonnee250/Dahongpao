import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {CanvasStage} from "@/canvasRender/CanvasStage.ts";
import {CanvasGraphicNode} from "@/canvasRender/CanvasGraphicNode.ts";
import {GMLApp, GraphLineType, ILineLayout, PolyLine, SimpleLine, TransformMatrix} from "@/entity/graphic.ts";
import {CanvasPolyLine, CanvasSimpleLine} from "@/canvasRender/CanvasGraphicLine.ts";
import {LineLayout} from "@/layout/LineLayout.ts";
import {PolyLineLayout} from "@/layout/PolyLineLayout.ts";
import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";

export class CanvasGMLApp implements GMLApp{
    parser:GraphicLanguageParser;
    stage:CanvasStage;
    layoutMap:Map<GraphLineType,ILineLayout>;

    globalTransform:TransformMatrix=new TransformMatrix();

    constructor() {
        this.parser=new GraphicLanguageParser();
        this.stage=new CanvasStage();
        this.layoutMap=new Map<GraphLineType, ILineLayout>();
        this.layoutMap.set(GraphLineType.Line, new LineLayout());
        this.layoutMap.set(GraphLineType.PolyLine,new PolyLineLayout());
        this.globalTransform.a=window.devicePixelRatio;
        this.globalTransform.d=window.devicePixelRatio;
    }

    init(element: HTMLElement){
        this.stage.init(element);
    }

    draw(text:string){
        this.stage.clear();

        //restore
        const canvas=document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx=canvas.getContext("2d")!;
        const {a,b,c,d,e,f}=this.globalTransform;
        ctx.transform(a,b,c,d,e,f);

        this.parser.parseString(text);
        const map=this.parser.listener.nodeMap;
        const linkMap=this.parser.listener.linkMap;
        for(const [_,node] of map){
            const renderNode=CanvasGraphicNode.copyFrom(node);
            renderNode.draw();
        }
        for(const [_,linkLine] of linkMap){
            const layout=this.layoutMap.get(linkLine.type);
            if(!layout){
                continue;
            }
            const line=layout.layout(map,linkLine);
            if(!line){
                continue;
            }
            if(line instanceof SimpleLine){
                const renderLine=CanvasSimpleLine.copyFrom(line);
                renderLine.draw();
            }else if(line instanceof PolyLine){
                const renderLine=CanvasPolyLine.copyFrom(line);
                renderLine.draw();
            }
        }
    }

}