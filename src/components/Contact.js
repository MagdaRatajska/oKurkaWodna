import React from 'react';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Twoje imię"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Twój e-mail"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="To miejsce na Twoją wiadomość"/>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Wyślij</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

}

export default Contact;