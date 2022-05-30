import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressService from "../service/AddressService";
import "./Home.css";

export default function Home(props) {
  let [contacts, setcontact] = useState([]);

  useEffect(() =>{ fetchAddressBookApi()});

  let fetchAddressBookApi = () => {
    AddressService.getPerson().then((response) => {
      const contact = response.data.data;
      setcontact(contact);
    });
  };

  let deletePerson = (id) => {
    alert("deleted");
    const value = parseInt(id);
    AddressService.deletePerson(value);
    fetchAddressBookApi();
    // props.history.push({ pathname: "/form" });
  };

  let updatePerson = (id) => {
    alert("updating id: " + id);
    props.history.push({
      pathname: "/form",
      state: id,
    });
  };

  return (
    <div>
      <title>AddressBook App</title>
      <link rel="stylesheet" href="../css/home.css" />
      <header className="header-content header">
        <div className="logo-content">
          <img
            src="../assets/images/logo.PNG"
            alt=""
            className="logo-content-img"
            width="50px"
          />
          <div>
            <span className="addr-text">ADDRESS</span>
            <br />
            <span className="addr-text addr-book">BOOK</span>
          </div>
        </div>
      </header>
      <div className="main-content">
        <div className="header-content">
          <div className="person-detail-text">
            PERSON DETAILS <div className="person-count">{contacts.length}</div>
          </div>
          <Link to="/form" className="add-button">
            <img src="../assets/icons/add+24px.svg" alt="" />
            Add Person
          </Link>
        </div>

        <div className="table-main">
          <table id="table-display" className="table">
            <thead>
              <tr id= "table-head">
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => {
                return (
                  <tr>
                    <td>{contact.personId}</td>
                    <td>{contact.name}</td>
                    <td>{contact.address}</td>
                    <td>{contact.city}</td>
                    <td>{contact.state}</td>
                    <td>{contact.zipCode}</td>
                    <td>{contact.phNumber}</td>
                    <td>{contact.email}</td>
                    <td>
                      {" "}
                      <img
                        name={contact.personId}
                        src="../assets/icons/delete-black-18dp.svg"
                        alt="#"
                        onClick={() => deletePerson(contact.personId)}
                      />
                      <img
                        name={contact.personId}
                        src="../assets/icons/create-black-18dp.svg"
                        alt="edit"
          
                        onClick={() => updatePerson(contact.personId)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
