import React from "react";
import ReactDOM from "react-dom/client";
import Paginator from "./Paginator.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Paginator maxLimit={10} />
    </React.StrictMode>
);
