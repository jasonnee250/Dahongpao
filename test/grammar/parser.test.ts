import {describe,expect,test} from '@jest/globals'
import {GraphicLanguageParser} from '../../src/grammar/parser/GraphicLanguageParser'

const t0="Rect a x 0,y 0,w 100,h 200;";

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
        expect(front?.angle).toBe(0);
        expect(front?.alpha).toBe(1);
    })
})
