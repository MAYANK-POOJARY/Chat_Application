import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/routes/app.route";
import { Provider } from "react-redux";
import { store } from "./app/app.store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
);
