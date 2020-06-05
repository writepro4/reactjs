import React from "react";

//리액트에서는 {}인자값을 받을때 대괄호를 추가
//props에서 가져올때는 props.favourite 할 필요없이
//{favourite} es6문법을 이용해서 가져오면 됨.
function Food({ favourite }) {
    return <h1>I like {favourite}</h1>;
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Food favourite="kimchi" />
            <Food favourite="ramen" />
            <Food favourite="samgiopsal" />
            <Food favourite="chukumi" />
      </div>
  );
}

export default App;
