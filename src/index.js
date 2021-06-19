import * as React from "react";
import { render } from "react-dom";

import App from './views/App'
import "./index.css";


const target = document.getElementById("root");

const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

render(app,target);
