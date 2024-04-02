import {useRef} from "react";
import './index.css'
import {GMLApp} from "@/entity/graphic.ts";

interface IProps {
    gmlApp: GMLApp;
}

export const SimpleEditZone = ({gmlApp}: IProps) => {

    const ref = useRef(null);

    const click = () => {
        // @ts-ignore
        gmlApp!.draw(ref.current!.value);
    }

    return (<div className="left-zone">
        <div className="button-group">
            <button className="button" onClick={click}>To Draw</button>
        </div>
        <textarea className="edit-zone" ref={ref}/>
    </div>);
}