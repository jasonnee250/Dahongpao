import "./index.css"

export interface ButtonProp {
    click: () => void;
    buttonName: string;
}

interface IProp {
    buttons: ButtonProp[];
}

export const ButtonGroup = ({buttons}: IProp) => {

    return (
        <div className="button-group">
            {buttons.map(buttonProp =>
                <button className="button" onClick={buttonProp.click}>{buttonProp.buttonName}</button>
            )}
        </div>
    )

}