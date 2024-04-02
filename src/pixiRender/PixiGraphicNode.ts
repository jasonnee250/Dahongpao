import {GraphicNode, GraphicNodeType} from "@/entity/graphic.ts";
import {Graphics,Text} from "pixi.js";

export class PixiGraphicNode extends GraphicNode{

    g:Graphics;
    textGraphics:Text;

    constructor(id:string) {
        super(id);
        this.g=new Graphics();
        this.textGraphics=new Text();
    }
    public draw(){
        this.g.beginFill(this.color,this.alpha);
        this.g.lineStyle(this.borderWidth,this.borderColor,this.borderAlpha);
        if(this.type==GraphicNodeType.Rect){
            this.g.drawRect(this.x,this.y,this.w,this.h);
        }else if(this.type==GraphicNodeType.Circle){
            this.g.drawEllipse(this.x+0.5*this.w,this.y+0.5*this.h,0.5*this.w,0.5*this.h);
        }
        this.g.endFill();
        //文字
        if(this.text===""){
            return;
        }
        this.textGraphics.text=this.text;
        this.textGraphics.resolution=5;
        this.textGraphics.style={
            fontFamily:'Arial',
            fontSize:this.fontSize,
            fill:this.fontColor,
            align:'center',
        }
        this.textGraphics.x=this.x+0.5*(this.w-this.textGraphics.width);
        this.textGraphics.y=this.y+0.5*(this.h-this.textGraphics.height);
        this.g.addChild(this.textGraphics);
    }
}