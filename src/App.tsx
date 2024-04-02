import React from "react";
import "./App.css";
import {ExampleApp} from "@/canvasRender/ExampleApp.tsx";

function App() {

    return (
        <ExampleApp/>
    );
}

const AppMemo = React.memo(App);
export default AppMemo;
