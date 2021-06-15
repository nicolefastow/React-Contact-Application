import React from "react";
import {Link, Redirect} from "react-router-dom";
import './Form.css'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        const contact = this.props.contacts[this.props.match.params.index];
        this.state= {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            redirect: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /*Updating key value of input*/
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return(
            /*Reditect to homepage after form is edited and user presses submit, updates setContacts to new input values*/
            this.state.redirect ?
            <Redirect to="/" />
            :
            <div className="container">
                {/*Updating specficic index contact with new form input info*/}
                <form onSubmit={(e) => {
                    this.props.contacts[this.props.match.params.index] = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        phone: this.state.phone,
                        email: this.state.email,
                    };
                    /*Updating state of contactList and redirecting to home page when submitting*/
                    this.props.setContacts(this.props.contacts);
                    this.setState({redirect: true});
                    e.preventDefault();
                }}>
                    <h1 id="contact-title">Edit Contact</h1>
                        <div className="input-container">
                        <h2 id="subtitle">Edit the Information below</h2>
                        <h3>First Name:</h3>
                        <input name="firstName" type="text" defaultValue={this.state.firstName} onChange={this.handleInputChange} required/>
                        <h3>Last Name:</h3>
                        <input name="lastName" type="text" defaultValue={this.state.lastName} onChange={this.handleInputChange} required/>
                        <h3>Phone Number:</h3>
                        <input name="phone" type="tel" defaultValue={this.state.phone} onChange={this.handleInputChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        <h3>Email Address:</h3>
                        <input name="email" type="email" defaultValue={this.state.email} onChange={this.handleInputChange} required/>
                        <div class="contact-buttons">
                            <button type="submit" className="add-contact">Save</button>
                            {/*Linking back to home page without editing*/}
                            <Link to="/"><button className="add-cancel">Cancel</button></Link>
                        </div>
                    </div>
                </form>
                <div>
            </div>
            </div>
        );
    }
}

export default Edit;