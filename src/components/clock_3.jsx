import React, { Component } from 'react';
import '../clock3.css';

class Clock_3 extends Component {
    constructor(props){
        super(props);

        this.state ={
            time: new Date().toLocaleTimeString()
        }
        
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="Time">
                <p> {this.state.time}</p>
            </div>
            
        );
    }
}

export default Clock_3;