import React, {useState} from "react";
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NewContact from './NewContact';
import Edit from './Edit';

function App() { 
  /*Contact List - Hard coded and using useState for list*/
  const contactList = [
    {
      firstName: 'Nicole',
      lastName: 'Fastow',
      phone: '281-768-1068',
      email: 'nfastow@gmail.com'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      phone: '281-222-1010',
      email: 'jdoe@gmail.com'
    },
    {
      firstName: 'Anna',
      lastName: 'Smith',
      phone: '512-444-1888',
      email: 'asmith@gmail.com'
    },
  ];

  const [contacts, setContacts] = useState(contactList);

  /*Routing to Home, New Contact and Edit*/
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home contacts={contacts} setContacts={setContacts}/>
        </Route>
        <Route path="/newcontact">
          <NewContact contacts={contacts} setContacts={setContacts}/>  
        </Route>
        {/*route to edit page, index identified in mapping in home page to link to specific contact for editing for URL.
        Pass all the props set by route down to edit component, dynamically determines what to render*/}
        <Route path="/edit/:index" render={(props) => <Edit contacts={contacts} setContacts={setContacts} {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
