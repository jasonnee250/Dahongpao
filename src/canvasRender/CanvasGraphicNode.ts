import {GraphicNode, GraphicNodeType} from "@/entity/graphic.ts";
import {NORMAL_CANVAS_ID} from "@/canvasRender/constants.ts";

export class CanvasGraphicNode extends GraphicNode{

    constructor(id:string) {
        super(id);
    }

    draw():void{
        const canvas=document.getElementById(NORMAL_CANVAS_ID) as HTMLCanvasElement;
        const ctx=canvas.getContext("2d");
        if(this.type===GraphicNodeType.Rect){
            this.drawRect(ctx!);
        }else if(this.type===GraphicNodeType.Circle){
            this.drawCircle(ctx!);
        }
        this.drawText(ctx!);
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