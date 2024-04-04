import {CanvasGMLApp} from "@/canvasRender/CanvasGMLApp.ts";
import {GraphicNode, GraphLinkLine, IGraphicLine, Point} from "@/entity/graphic.ts";
import {GraphicUtils} from "@/entity/GraphicUtils.ts";

export class ExampleMainApp {
    gmlApp:CanvasGMLApp;//渲染
    nodeMap:Map<string,GraphicNode>;
    linkMap:Map<string,GraphLinkLine>;
    lineMap:Map<string,IGraphicLine>;

    targetNode:GraphicNode|null=null;
    relatedLinks:Set<GraphLinkLine>;

    lastPos:Point=new Point(0,0);
    constructor() {
        this.gmlApp=new CanvasGMLApp();
        this.nodeMap=new Map();
        this.linkMap=new Map();
        this.lineMap=new Map();
        this.relatedLinks=new Set<GraphLinkLine>();
    }

    private getGlobalPoint(event:PointerEvent):Point{
        const htmlDom=document.getElementsByClassName("left-zone");
        const editZone=htmlDom[0];
        const point=new Point(event.clientX-editZone.clientWidth,event.clientY);
        point.x=point.x*window.devicePixelRatio;
        point.y=point.y*window.devicePixelRatio;
        const {a,d,e,f}=this.gmlApp.globalTransform;
        return new Point(point.x / a - e / a, point.y / d - f / d);
    }

    start():void{
        document.addEventListener("pointerdown",this.onPointerDown);
        document.addEventListener("pointermove",this.onPointerMove);
        document.addEventListener("pointerup",this.onPointerUp);
    }

    stop():void{
        document.removeEventListener("pointerdown",this.onPointerDown);
        document.removeEventListener("pointermove",this.onPointerMove);
        document.removeEventListener("pointerup",this.onPointerUp);
    }

    parse(text:string):void{
        if(text===""){
            return;
        }
        const {lineMap,linkMap,nodeMap}=this.gmlApp.parse(text);
        this.nodeMap=nodeMap;
        this.lineMap=lineMap;
        this.linkMap=linkMap;
        this.gmlApp.drawData(this.nodeMap,this.lineMap);
    }

    private relatedLinkLine(node:GraphicNode):void{
        //更新与之相关的linkLine
        for(const [_,link] of this.linkMap){
            if(link.start===node.id){
                this.relatedLinks.add(link);
            }
            if(link.end===node.id){
                this.relatedLinks.add(link);
            }
        }
    }

    onPointerDown=(event:PointerEvent)=>{
        const globalPoint=this.getGlobalPoint(event);
        for(const [_,node] of this.nodeMap){
            if(GraphicUtils.rectContains(globalPoint,node)){
                this.targetNode=node;
                this.lastPos=globalPoint;
                this.relatedLinkLine(this.targetNode);
                break;
            }
        }
    }
    onPointerMove=(event:PointerEvent)=>{
        if(!this.targetNode){
            return;
        }
        const globalPoint=this.getGlobalPoint(event);
        this.targetNode.x+=globalPoint.x-this.lastPos.x;
        this.targetNode.y+=globalPoint.y-this.lastPos.y;
        this.lastPos=globalPoint;

        for(const link of this.relatedLinks){
            const line=this.gmlApp.layoutLine(this.nodeMap,link);
            if(line){
                this.lineMap.set(line.id,line);
            }
        }

        this.gmlApp.drawData(this.nodeMap,this.lineMap);
    }
    onPointerUp=(_:PointerEvent)=>{
        this.targetNode=null;
        this.relatedLinks.clear();
        this.lastPos.x=0;
        this.lastPos.y=0;
    }
}