import {Point} from "@/entity";

/**
 * 仿射矩阵
 * |a,b,c|
 * |d,e,f|
 * |0,0,1|
 */
export class AffineMatrix {
    a:number=1;
    b:number=0;
    c:number=0;
    d:number=1;
    e:number=0;
    f:number=0;

    constructor() {}

    static generateMatrix(){
        return new AffineMatrix();
    }

    rotate(angle:number):AffineMatrix{
        const rad=angle/180*Math.PI;
        this.rotate2(rad);
        return this;
    }

    rotate2(rad:number):AffineMatrix{
        this.a=Math.cos(rad);
        this.b=-Math.sin(rad);
        this.d=Math.sin(rad);
        this.e=Math.cos(rad);
        return this;
    }

    translate(x:number,y:number):AffineMatrix{
        this.c=x;
        this.f=y;
        return this;
    }

    crossProduct(matrix:AffineMatrix):AffineMatrix{
        const res=new AffineMatrix();
        res.a=this.a*matrix.a+this.b*matrix.d;
        res.b=this.a*matrix.b+this.b*matrix.e;
        res.c=this.a*matrix.c+this.b*matrix.f+this.c;

        res.d=this.d*matrix.a+this.e*matrix.d;
        res.e=this.d*matrix.b+this.e*matrix.e;
        res.f=this.d*matrix.c+this.e*matrix.f+this.f;
        return res;
    }

    crossPoint(p:Point):Point{
        return new Point(this.a*p.x+this.b*p.y+this.c,this.d*p.x+this.e*p.y+this.f)
    }




}