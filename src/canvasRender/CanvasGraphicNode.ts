import {GraphicNode, GraphicNodeType} from "@/entity/graphic.ts";

export class CanvasGraphicNode extends GraphicNode{

    graphicContext:CanvasRenderingContext2D;

    static copyFrom(node:GraphicNode,ctx:CanvasRenderingContext2D):CanvasGraphicNode{
        const graphNode=new CanvasGraphicNode(node.id,ctx);
        const keys=Object.keys(node);
        for(const key of keys){
            // @ts-ignore
            graphNode[key]=node[key];
        }
        return graphNode;
    }

    constructor(id:string,ctx:CanvasRenderingContext2D) {
        super(id);
        this.graphicContext=ctx;
    }

    draw():void{
        if(this.type===GraphicNodeType.Rect){
            this.drawRect(this.graphicContext);
        }else if(this.type===GraphicNodeType.Circle){
            this.drawCircle(this.graphicContext);
        }
        this.drawText(this.graphicContext);
    }

    drawRect(ctx:CanvasRenderingContext2D){
        ctx.fillStyle='#'+this.color.toString(16);
        ctx.globalAlpha=this.alpha;
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle='#'+this.borderColor.toString(16);
        ctx.lineWidth=this.borderWidth;
        ctx.globalAlpha=this.borderAlpha;
        ctx.strokeRect(this.x,this.y,this.w,this.h);
    }

    drawCircle(ctx:CanvasRenderingContext2D){
        ctx.fillStyle='#'+this.color.toString(16);
        ctx.globalAlpha=this.alpha;
        ctx.beginPath();
        ctx.arc(this.x+0.5*this.w,this.y+0.5*this.h,0.25*(this.w+this.h),0,2*Math.PI,false);
        ctx.fill();
        ctx.strokeStyle='#'+this.borderColor.toString(16);
        ctx.lineWidth=this.borderWidth;
        ctx.globalAlpha=this.borderAlpha;
        ctx.stroke();
        ctx.closePath();
    }

    drawText(ctx:CanvasRenderingContext2D){
        const textFill='#'+this.fontColor.toString(16);
        ctx.fillStyle=textFill==='#0'?'#000000':textFill;
        ctx.globalAlpha=1;
        ctx.font=this.fontSize.toString()+'px Arial';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.fillText(this.text,this.x+0.5*this.w,this.y+0.5*this.h);
    }
}