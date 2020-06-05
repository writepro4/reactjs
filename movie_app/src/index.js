import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//하나의 컴포넌트만 렌더링 하기 때문에 컴포넌트를 추가 하고 싶다면
//렌더링한 컴포넌트에 추가시켜야 함.
ReactDOM.render(<App />, document.getElementById("potato"));