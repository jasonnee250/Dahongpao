import { GraphicNode, GraphicNodeType } from '../../entity/graphic'
import { GraphicTypeContext, LineGraphicDefineContext, PropertyDefineContext, StatementContext } from '../g4/RMGLParser'
import RMGLParserListener from "../g4/RMGLParserListener.ts";


export class RMGLParserListenerImpl extends RMGLParserListener{
    
    nodeMap:Map<string,GraphicNode>=new Map();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enterStatement=(_ctx: StatementContext)=>{
        this.nodeMap.clear();
    }

    enterLineGraphicDefine=(ctx: LineGraphicDefineContext)=>{
        const variableNameList=ctx.variableName_list();
        for(const name of variableNameList){
            const node=new GraphicNode(name.getText());
            node.type=this.graphicType(ctx.graphicType());
            //属性
            this.propertyList(node,ctx.propertyDefine_list());
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
                node.x=parseFloat(property.charText().getText());
            }
            if(property.Y()){
                node.y=parseFloat(property.charText().getText());
            }
            if(property.W()){
                node.w=parseFloat(property.charText().getText());
            }
            if(property.H()){
                node.h=parseFloat(property.charText().getText());
            }
            if(property.Angle()){
                node.angle=parseFloat(property.charText().getText());
            }
            if(property.Alpha()){
                node.alpha=parseFloat(property.charText().getText());
            }
            if(property.Color()){
                node.color=parseInt(property.charText().getText());
            }
            if(property.Text()){
                node.text=property.charText().getText();
            }
            if(property.BorderColor()){
                node.borderColor=parseInt(property.charText().getText());
            }
            if(property.BorderAlpha()){
                node.borderColor=parseFloat(property.charText().getText());
            }
            if(property.BorderWidth()){
                node.borderColor=parseFloat(property.charText().getText());
            }
        }
    }


}