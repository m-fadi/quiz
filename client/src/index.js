import { createRoot } from "react-dom/client";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import Registration from "../src/pages/Registration";
import Home from "../src/pages/Home";
import Welcome from "../src/pages/welcome";

import App from "./App";
const root = createRoot(document.querySelector("main"));

fetch("/user/id.json")
    .then((response) => response.json())
    .then((data) => {
        if (data.userId) {
            //init(store);
            root.render(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        } else {
            root.render(
                <Provider store={store}>
                    <Welcome />
                </Provider>
            );
        }
    });
