import React from "react";

/*Popup component with message*/
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <div class="container-msg">
              <h1 class="message">{this.props.text}</h1>
              <div class="message-btns">
              <button onClick={this.props.removeContact} className="yes">Yes</button>
              <button onClick={this.props.closePopup} className="cancel">Cancel</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

/*Component to delete contact from contactList object*/
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  /*function to open and close the popup*/
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  /*function to remove contact from contactList, identifying by index, then closing popup*/
  removeContact(){
    this.props.setContacts(this.props.contacts.filter((_, idx) => idx !== this.props.index));
    this.togglePopup();
  }
    
  render() {
    return (
      <div className='exit'>
        <i class="fas fa-trash" onClick={this.togglePopup.bind(this)}></i>
        {this.state.showPopup ? 
          <Popup
            /*message and button functions passed to popup component*/
            text={`Are you sure you want to delete ${this.props.contacts[this.props.index].firstName} ${this.props.contacts[this.props.index].lastName}'s contact?`}
            closePopup={this.togglePopup.bind(this)}
            removeContact={this.removeContact.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default Delete;