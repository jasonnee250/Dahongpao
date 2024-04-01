import {GraphicNode, GraphicNodeType} from "@/entity/graphic.ts";
import {Graphics} from "pixi.js";

export class PixiGraphicNode extends GraphicNode{

    g:Graphics;

    constructor(id:string) {
        super(id);
        this.g=new Graphics();
    }
    public draw(){
        this.g.beginFill(this.color,this.alpha);
        this.g.lineStyle(this.borderWidth,this.borderColor,this.borderAlpha);
        if(this.type==GraphicNodeType.Rect){
            this.g.drawRect(this.x,this.y,this.w,this.h);
        }else if(this.type==GraphicNodeType.Circle){
            this.g.drawEllipse(this.x,this.y,this.w,this.h);
        }
        this.g.endFill();
    }
}