import { GraphicNode, GraphicNodeType } from '../../entity/graphic'
import { GraphicTypeContext, LineGraphicDefineContext, PropertyDefineContext, StatementContext } from '../g4/RMGLParser'
import {RMGLParserListener} from '../g4/RMGLParserListener'


export class RMGLParserListenerImpl implements RMGLParserListener{
    
    nodeMap:Map<string,GraphicNode>=new Map();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enterStatement=(ctx: StatementContext)=>{
        console.log(ctx.toString());
        this.nodeMap.clear();
    }

    enterLineGraphicDefine=(ctx: LineGraphicDefineContext)=>{
        const variableNameList=ctx.variableName();
        console.log(ctx.toString());
        for(const name of variableNameList){
            const node=new GraphicNode(name.text);
            node.type=this.graphicType(ctx.graphicType());
            //属性
            this.propertyList(node,ctx.propertyDefine());
            this.nodeMap.set(node.id,node);
        }
    }

    private graphicType(typeCtx:GraphicTypeContext):GraphicNodeType{
        if(typeCtx.Rect()){
            return GraphicNodeType.Rect;
        }
        if(typeCtx.Circle()){
            return GraphicNodeType.Circle;
        }
        return GraphicNodeType.Rect;
    }

    private propertyList(node:GraphicNode,ctx:PropertyDefineContext[]){
        for(const property of ctx){
            if(property.X()){
                node.x=parseFloat(property.charText().text);
            }
            if(property.Y()){
                node.y=parseFloat(property.charText().text);
            }
            if(property.W()){
                node.w=parseFloat(property.charText().text);
            }
            if(property.H()){
                node.h=parseFloat(property.charText().text);
            }
            if(property.Angle()){
                node.angle=parseFloat(property.charText().text);
            }
            if(property.Alpha()){
                node.alpha=parseFloat(property.charText().text);
            }
            if(property.Color()){
                node.color=parseInt(property.charText().text);
            }
            if(property.Text()){
                node.text=property.charText().text;
            }
            if(property.BorderColor()){
                node.borderColor=parseInt(property.charText().text);
            }
            if(property.BorderAlpha()){
                node.borderColor=parseFloat(property.charText().text);
            }
            if(property.BorderWidth()){
                node.borderColor=parseFloat(property.charText().text);
            }
        }
    }


}