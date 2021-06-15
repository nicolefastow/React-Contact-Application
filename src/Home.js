import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
import Delete from './Delete';
import Collapsible from './Collapsible';

const Home = ({contacts, setContacts}) => {
  return(
    <div id="container">
      <h1 id="home-title">Welcome To Your Contact List</h1>
      {/*Link to New Contact Page*/}
      <Link to="/newcontact"><button className="new-btn"><i className="fas fa-plus-square"></i>Add New Contact</button></Link>
      <ul>
        {/*mapping through contactList in app.js and rendering card on page, identifying index for delete and edit pages*/}
        {contacts.map((item, index) => (
        <li key={item.firstName}>
            {/*passing props to delete popup component*/}
            <Delete contacts={contacts} setContacts={setContacts} index={index}/>
            <div><strong>First Name:</strong> {item.firstName}</div>
            <div><strong>Last Name:</strong> {item.lastName}</div>
            <div><strong>Phone Number:</strong> {item.phone}</div>
            {/*dropdown component to view email*/}
            <Collapsible>
            <div><strong>Email Address:</strong> {item.email}</div>
            </Collapsible>
            {/*Link to edit page, passing index to url to link to specific contactList index for editing*/}
            <Link to={`/edit/${index}`}><button className="edit-btn">Edit Contact</button></Link>
        </li>
        ))}
      </ul>
    </div> 
  );
};

export default Home;