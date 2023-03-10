import { createRoot } from "react-dom/client";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import App from "./App";
import Welcome from "../src/pages/welcome";

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
            root.render(<Welcome />);
        }
    });