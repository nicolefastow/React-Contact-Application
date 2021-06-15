import React from "react";
import {Link, Redirect} from "react-router-dom";
import "./Form.css";

class NewContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
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
            /*Reditect to homepage after form is filled and user presses submit, updates setContacts and adds new input values*/
            this.state.redirect ?
            <Redirect to="/" />
            :
            <div className="container">
                {/*Adding new contact card to contactList*/}
                <form onSubmit={(e) => {
                    this.props.contacts.push({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        phone: this.state.phone,
                        email: this.state.email,
                    });
                    /*Updating state of contactList and redirecting to home page when submitting*/
                    this.props.setContacts(this.props.contacts);
                    this.setState({redirect: true});
                    e.preventDefault();
                }}>
                    <h1 id="contact-title">New Contact Page</h1>
                        <div className="input-container">
                        <h2 id="subtitle">Enter Contact Card Information</h2>
                        <h3>First Name:</h3>
                        <input name="firstName" type="text" placeholder="First Name*" value={this.state.firstName} onChange={this.handleInputChange} required/>
                        <h3>Last Name:</h3>
                        <input name="lastName" type="text" placeholder="Last Name*" value={this.state.lastName} onChange={this.handleInputChange} required/>
                        <h3>Phone Number:</h3>
                        <input name="phone" type="tel" placeholder="555-555-5555*" value={this.state.phone} onChange={this.handleInputChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        <h3>Email Address:</h3>
                        <input name="email" type="email" placeholder="Email*" value={this.state.email} onChange={this.handleInputChange} required/>
                        <div class="contact-buttons">
                            <button type="submit" className="add-contact">Add Contact</button>
                            {/*Linking back to home page without creating new contact*/}
                            <Link to="/"><button className="add-cancel">Cancel</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewContact;