import React from 'react';
import './Tagasiside.css';
import * as firebase from "firebase";
const uuid = require('uuid');

const firebaseConfig = {
    apiKey: "AIzaSyCQW-6kXeq6ZHBs3i0ftWj8SuD-1lgdXHA",
    authDomain: "react-6a954.firebaseapp.com",
    databaseURL: "https://react-6a954.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(firebaseConfig);

export default class Tagasiside extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                    uid: uuid.v1(),
                    name: "",
                    email: "",
                    message: ""
        };

        this.submitData = this.submitData.bind(this);
        this.inputData = this.inputData.bind(this);
    }

    submitData(event) {
        event.preventDefault();
        //event.target.reset();
        firebase
            .database()
            .ref(`Newdata/${this.state.uid}`)
            .set({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })

            .catch(error => console.log(error));
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    inputData(event) {
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const message = this.refs.message.value;
        this.setState({ name, email, message });
    }

    render(){

        return (
            <main style={{marginTop: '63px'}}>
                <div className="content" style={{minHeight: '100%'}}>
                    <div className="container">
                        <div className="wrapper animated bounceIn">
                            <div className="contact">
                                <h3>Tagasiside</h3>
                                <form onSubmit={this.submitData} id="contactForm">
                                    <p>
                                        <label>Nimi</label>
                                        <input type="text" name="name" required={true}
                                               placeholder="Sinu nimi" id="name" value={this.state.name} onChange={this.inputData} ref="name" />
                                    </p>
                                    <p>
                                        <label>Email</label>
                                        <input type="email" name="email" required={true}
                                               placeholder="Sinu email" id="email" value={this.state.email} onChange={this.inputData} ref="email" />
                                    </p>
                                    <p className="full">
                                        <label>Tagasiside</label>
                                        <textarea name="message" rows="3" required={true}
                                                  placeholder="Sinu tagasiside" id="message" value={this.state.message} onChange={this.inputData} ref="message" />
                                    </p>
                                    <p className="full">
                                        <button>Saada</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    }