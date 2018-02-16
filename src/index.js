import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import styled from "styled-components";
import "flexboxgrid2";

/*<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
