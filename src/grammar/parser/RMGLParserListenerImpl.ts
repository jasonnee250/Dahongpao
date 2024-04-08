import {GraphicNode, GraphicNodeType, GraphLineType, GraphLinkLine, LineArrowType} from '@/entity/graphic'
import {
    GraphicTypeContext,
    LineGraphicDefineContext,
    LinkDefineContext,
    PropertyDefineContext,
    StatementContext,
    TextDefineContext
} from '../g4/RMGLParser'
import RMGLParserListener from "../g4/RMGLParserListener.ts";


export class RMGLParserListenerImpl extends RMGLParserListener {

    nodeMap: Map<string, GraphicNode> = new Map();
    linkMap: Map<string, GraphLinkLine> = new Map();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enterStatement = (_ctx: StatementContext) => {
        this.nodeMap.clear();
        this.linkMap.clear();
    }

    enterLineGraphicDefine = (ctx: LineGraphicDefineContext) => {
        const variableNameList = ctx.variableName_list();
        for (const name of variableNameList) {
            const node = new GraphicNode(name.getText());
            node.zIndex=this.nodeMap.size+this.linkMap.size;
            node.type = this.graphicType(ctx.graphicType());
            //属性
            this.propertyList(node, ctx.propertyDefine_list());
            this.textDefine(node, ctx.textDefine_list());
            this.nodeMap.set(node.id, node);
        }
    }

    enterLinkDefine = (ctx: LinkDefineContext) => {
        const tokenList = ctx.TokenChar_list();
        if (tokenList.length !== 2) {
            return;
        }
        const startId = tokenList[0].getText();
        const endId = tokenList[1].getText();
        const linkLine = new GraphLinkLine(startId + '-' + endId);
        if (ctx.SimpleLine()) {
            linkLine.type = GraphLineType.Line;
        } else if (ctx.Line()) {
            linkLine.type = GraphLineType.Line;
        } else if (ctx.PolyLine()) {
            linkLine.type = GraphLineType.PolyLine;
        } else if (ctx.CurveLine()) {
            linkLine.type = GraphLineType.Curve;
        }
        linkLine.start = startId;
        linkLine.end = endId;
        if(ctx.RArrow()){
            linkLine.rArrow = LineArrowType.Arrow;
        }
        if(ctx.LArrow()){
            linkLine.lArrow = LineArrowType.Arrow;
        }
        linkLine.zIndex=this.nodeMap.size+this.linkMap.size;
        this.linkMap.set(linkLine.id, linkLine);
    }

    private graphicType(typeCtx: GraphicTypeContext): GraphicNodeType {
        if (typeCtx.Rect()) {
            return GraphicNodeType.Rect;
        }
        if (typeCtx.Circle()) {
            return GraphicNodeType.Circle;
        }
        if (typeCtx.Diamond()) {
            return GraphicNodeType.Diamond;
        }
        if (typeCtx.Parallelogram()) {
            return GraphicNodeType.Parallelogram;
        }
        if (typeCtx.Trapezoid()) {
            return GraphicNodeType.Trapezoid;
        }
        if (typeCtx.Triangle()) {
            return GraphicNodeType.Triangle;
        }
        return GraphicNodeType.Rect;
    }

    private textDefine(node: GraphicNode, ctx: TextDefineContext[]) {
        for (const property of ctx) {
            if (property.annotationText()) {
                node.text = property.annotationText().getText();
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