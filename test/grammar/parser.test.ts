import {describe,expect,test} from '@jest/globals'
import {GraphicLanguageParser} from '@/grammar/parser/GraphicLanguageParser'
import {GraphicNodeType} from "src";
import fs from "fs";

const t0="Rect a x 0,y 0,w 100,h 200,color 0xffffff;";

describe('parser parse',()=>{
    test('case1:simple rect',()=>{
        const parser=new GraphicLanguageParser();
        parser.parseString(t0);
        expect(parser.listener.nodeMap.size).toBe(1);
        const values=[...parser.listener.nodeMap.values()];
        const front=values.at(0);
        expect(front?.x).toBe(0);
        expect(front?.y).toBe(0);
        expect(front?.w).toBe(100);
        expect(front?.h).toBe(200);
        expect(front?.color).toBe(0xffffff);
        expect(front?.angle).toBe(0);
        expect(front?.alpha).toBe(1);
    })

    test('case1:构造测试数据',()=>{
        const nodeType=[
            "Rect",
            'Rect',
            'Rect',
            'Rect',
            'Rect',
            'Circle',
            'Triangle',
            'Trapezoid',
            'Diamond',
            'Parallelogram'
        ]


        const generateFn=(i:number)=>{
            const index=Math.floor(Math.random()*10);
            const x=Math.random()*2000;
            const y=Math.random()*1000;
            const w=Math.random()*200;
            const h=Math.random()*200;
            const color=Math.round(Math.random()*16*16*16*16*16*16);
            const type=nodeType[index];
            const res=`${type} test${i} x ${x},y ${y},w ${w},h ${h},text \"hello, i am test.\",color ${color};\n`
            return res;
        }
        let text="";
        for(let i=0;i<3000;i++){
            text=text+generateFn(i);
        }
        const fs = require('fs');

        const filePath = '/Users/nijiaxin/Codes/Dahongpao/test/grammar/testData.txt';

        fs.writeFileSync(filePath, text);
        console.log('文件写入成功');

    })
})
