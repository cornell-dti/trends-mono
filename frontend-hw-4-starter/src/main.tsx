import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Gallery from "./components/Gallery.tsx";
import { kdramas } from "./data.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Gallery itemsPerPage={10} data={kdramas} />
    </React.StrictMode>
);
