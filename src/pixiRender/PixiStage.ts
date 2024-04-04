import { Application, Container } from "pixi.js";


export class PixiStage {
    public app: Application | null = null;

    //主画板
    container: Container;

    constructor() {
        this.container = new Container();
    }

    public init(element: HTMLElement): void {
        const ratio=window.devicePixelRatio;
        this.app = new Application({
            background: "#ffffff",
            antialias: true,
            autoDensity: true,
        });
        element.appendChild(this.app!.view as HTMLCanvasElement);
        console.log("begin draw stage", element.clientWidth, element.clientHeight);
        this.app!.renderer.resize(element.clientWidth/ratio, element.clientHeight/ratio);
        this.container.scale={x:1/ratio,y:1/ratio};
        this.app!.stage.addChild(this.container);
    }

    public clear():void{
        this.container.removeChildren();
    }

    destroy():void{
        this.app?.view.parentNode?.removeChild(this.app?.view);
        this.app?.destroy();
    }
}
