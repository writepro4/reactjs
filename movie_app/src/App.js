import React from "react";

class App extends React.Component {
    //state를 사용할려고 클래스 App을 사용하는 것도 있다.
    //변할 수 있는 데이터는 state를 사용한다.
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    componentDidMount() {
        console.log("Component rendered");
    }
    componentDidUpdate() {
        console.log("I just updated");
    }
    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }

    render() {
        console.log("I'm rendering");
        //함수()는 즉시 나타냄, 함수 는 눌러야만 작동함.
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
