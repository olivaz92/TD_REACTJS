import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import du composant
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />

                <header className="App-header">
                    <HelloWorld
                        client={this.props.nom}
                        pseudo={this.props.pseudo }
                        age={this.props.age}
                        ville={this.props.ville}

                    />
                </header>
            </div>
        );
    }
}

export default App;
