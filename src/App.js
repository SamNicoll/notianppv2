import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core';

class App extends React.Component {

    calculate = (value) => {
        let arr = value.split("");
        let total = 0;
        arr.forEach(element => {
            if (element === "/") {
                total = 10;
                return;
            }
            total += element === "-" ? 0 : parseInt(element)
        });
        return "The score is the friends you made along the way";
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({
            value: this.calculate(event.target.value)
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">FizzBuzz</header>
                <TextField id="input" variant="filled" label="Input" onChange={this.onChange}/>
                <TextField id="output" variant="outlined" readOnly={true} value={this.state.value}/>
            </div>
        )
    };
}

export default App;
