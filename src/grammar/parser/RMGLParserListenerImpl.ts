import {GraphicNodeType} from '@/entity/graphic'
import {
    GraphicTypeContext,
    LineGraphicDefineContext,
    PropertyDefineContext,
    StatementContext,
    TextDefineContext
} from '../g4/RMGLParser'
import RMGLParserListener from "../g4/RMGLParserListener.ts";
import {PixiGraphicNode as GraphicNode} from "@/pixiRender/PixiGraphicNode.ts";


export class RMGLParserListenerImpl extends RMGLParserListener {

    nodeMap: Map<string, GraphicNode> = new Map();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enterStatement = (_ctx: StatementContext) => {
        this.nodeMap.clear();
    }

    enterLineGraphicDefine = (ctx: LineGraphicDefineContext) => {
        const variableNameList = ctx.variableName_list();
        for (const name of variableNameList) {
            const node = new GraphicNode(name.getText());
            node.type = this.graphicType(ctx.graphicType());
            //属性
            this.propertyList(node, ctx.propertyDefine_list());
            this.textDefine(node,ctx.textDefine_list());
            this.nodeMap.set(node.id, node);
        }
    }

    private graphicType(typeCtx: GraphicTypeContext): GraphicNodeType {
        if (typeCtx.Rect()) {
            return GraphicNodeType.Rect;
        }
        if (typeCtx.Circle()) {
            return GraphicNodeType.Circle;
        }
        return GraphicNodeType.Rect;
    }

    private textDefine(node: GraphicNode, ctx:TextDefineContext[]){
        for(const property of ctx){
            if(property.annotationText()){
                node.text=property.annotationText().getText();
            }
        }
    }

    private propertyList(node: GraphicNode, ctx: PropertyDefineContext[]) {
        for (const property of ctx) {
            if (property.X()) {
                node.x = parseFloat(property.charText().getText());
            } else if (property.Y()) {
                node.y = parseFloat(property.charText().getText());
            } else if (property.W()) {
                node.w = parseFloat(property.charText().getText());
            } else if (property.H()) {
                node.h = parseFloat(property.charText().getText());
            } else if (property.Angle()) {
                node.angle = parseFloat(property.charText().getText());
            } else if (property.Alpha()) {
                node.alpha = parseFloat(property.charText().getText());
            } else if (property.Color()) {
                node.color = parseInt(property.charText().getText());
            } else if (property.BorderColor()) {
                node.borderColor = parseInt(property.charText().getText());
            } else if (property.BorderAlpha()) {
                node.borderAlpha = parseFloat(property.charText().getText());
            } else if (property.BorderWidth()) {
                node.borderWidth = parseFloat(property.charText().getText());
            } else if (property.FontSize()) {
                node.fontSize = parseFloat(property.charText().getText());
            } else if (property.FontColor()) {
                node.fontColor = parseInt(property.charText().getText());
            }
        }
    }


}