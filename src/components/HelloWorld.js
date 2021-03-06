import React, { Component } from 'react';

export default class HelloWorld extends Component {
    //constructeur
    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);

        this.state= {
            ville:"Paris",
            nom:"franck olivier",
            pseudo:"toto",
            age:"20",
        }

    }

    //l'évènement en pressant sur la touche du clavier
    onKeyUp(e) {
        console.log(this.setState({ville: e.target.value=this.state.ville}));
    }


    render() {
        return (
            <div>
                <p>
                    Bonjour je suis {this.state.nom},
                    mon pseudo {this.state.pseudo},
                    mon age {this.state.age}
                    et je vis dans {this.state.ville}
                </p>
                <p>
                    <input type="text" onKeyUp = {this.onKeyUp } value={this.state.value}/>
                </p>
            </div>
        );
    }

}

