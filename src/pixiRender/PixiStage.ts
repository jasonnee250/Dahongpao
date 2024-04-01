import { Application, Container } from "pixi.js";


export class RenderApp {
    public app: Application | null = null;

    //主画板
    container: Container;

    private constructor() {
        this.container = new Container();
    }

    public init(element: HTMLElement): void {
        this.app = new Application({
            background: "#ffffff",
            antialias: true,
            autoDensity: true,
        });
        element.appendChild(this.app!.view as HTMLCanvasElement);
        console.log("begin draw stage", element.clientWidth, element.clientHeight);
        this.app!.renderer.resize(element.clientWidth, element.clientHeight);
        this.app!.stage.addChild(this.container);

    }
}
