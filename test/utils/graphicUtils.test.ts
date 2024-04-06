import {describe, expect, test} from "@jest/globals";
import {GraphicUtils} from "@/entity/GraphicUtils";
import {Point} from "@/entity/graphic";
import {AffineMatrix} from "@/math/AffineMatrix";


describe('graphic utils', () => {

    test('case0:test rotate matrix', () => {
        const p = new Point(100, 100);
        const matrix=AffineMatrix.generateMatrix().rotate(45);
        const res=matrix.crossPoint(p);
        console.log("=====>", res);
        expect(Math.abs(res.x - 141.421) < 1e-3).toBe(true);
        expect(Math.abs(res.y) < 1e-3).toBe(true);

    })

    test('case0:测试平移&旋转组合', () => {
        const p = new Point(0, 100);
        const matrix=AffineMatrix.generateMatrix().translate(50,0).rotate(45);
        const res=matrix.crossPoint(p);
        console.log("=====>", res);
        // expect(Math.abs(res.x - 141.421) < 1e-3).toBe(true);
        // expect(Math.abs(res.y) < 1e-3).toBe(true);

    })


    test('case1:get arrow horizon', () => {
        //水平情况
        const start = new Point(0, 0);
        const end = new Point(100, 0);
        const res = GraphicUtils.getArrowPoint(start, end);
        expect(Math.abs(res.a.y - 2.5) < 1e-3).toBe(true);
        expect(Math.abs(res.b.y + 2.5) < 1e-3).toBe(true);
        expect(Math.abs(res.a.x - 95.669) < 1e-3).toBe(true);
        expect(Math.abs(res.b.x - 95.669) < 1e-3).toBe(true);

    })

    test('case:第一象限45度', () => {
        //第一象限倾斜
        const start = new Point(0, 0);
        const end = new Point(100, 100);
        const res = GraphicUtils.getArrowPoint(start, end);
        expect(Math.abs(res.a.x-95.1703)<1e-3).toBe(true);
        expect(Math.abs(res.a.y-98.7059)<1e-3).toBe(true);
        expect(Math.abs(res.b.x-98.7059)<1e-3).toBe(true);
        expect(Math.abs(res.b.y-95.1703)<1e-3).toBe(true);
    })
    test('case:第3象限45度', () => {
        const start = new Point(0, 0);
        const end = new Point(-100, -100);
        const res = GraphicUtils.getArrowPoint(start, end);
        expect(Math.abs(res.a.x+95.1703)<1e-3).toBe(true);
        expect(Math.abs(res.a.y+98.7059)<1e-3).toBe(true);
        expect(Math.abs(res.b.x+98.7059)<1e-3).toBe(true);
        expect(Math.abs(res.b.y+95.1703)<1e-3).toBe(true);
    })
    test('case:第2象限45度', () => {
        const start = new Point(0, 0);
        const end = new Point(-100, 100);
        const res = GraphicUtils.getArrowPoint(start, end);
        expect(Math.abs(res.a.x+98.7059)<1e-3).toBe(true);
        expect(Math.abs(res.a.y-95.1703)<1e-3).toBe(true);
        expect(Math.abs(res.b.x+95.1703)<1e-3).toBe(true);
        expect(Math.abs(res.b.y-98.7059)<1e-3).toBe(true);
    })
    test('case:90度', () => {
        //第一象限倾斜
        const start = new Point(0, 0);
        const end = new Point(0, 100);
        const res = GraphicUtils.getArrowPoint(start, end);
        expect(Math.abs(res.a.x+2.5)<1e-3).toBe(true);
        expect(Math.abs(res.a.y-95.6698)<1e-3).toBe(true);
        expect(Math.abs(res.b.x-2.5)<1e-3).toBe(true);
        expect(Math.abs(res.b.y-95.6698)<1e-3).toBe(true);
    })


})