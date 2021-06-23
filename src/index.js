import * as React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './views/App'
import "./index.css";

const target = document.getElementById("root");

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

render(app,target);
