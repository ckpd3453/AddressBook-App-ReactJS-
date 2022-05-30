import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressService from "../service/AddressService";

import "./Form.css";

export default function Form(props) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    isUpdate: false,
  });

  const resetData = (event) => {
    setContact({
      ...contact,
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      isUpdate: false,
    });
  };


  const value = props.location.state;
  useEffect(() => {
    if (value) {
      getDataById(value);
    }
  }, []);

  const getDataById = (id) => {
    console.log("came inside")
    AddressService.getDataById(id).then((response) => {
      console.log("updated"+ response);
      console.log(response.data.data)
      setContact({
        ...contact,
        ...response,
        name: response.data.data.name,
        address: response.data.data.address,
        city: response.data.data.city,
        state: response.data.data.state,
        zip: response.data.data.zipCode,
        phone: response.data.data.phNumber,
        email: response.data.data.email,
        isUpdate: true,
      });
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
    console.log(contact);
  };

  const saveData = (e) => {
    e.preventDefault();
    console.log("Succesfully added ");
    alert("Succesfully added");
    let person = {
      id: "",
      name: contact.name,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zipCode: contact.zip,
      phNumber: contact.phone,
      email: contact.email,

    };
    if (contact.isUpdate) {
      AddressService.updatePerson(value, person).then((response) => {
        console.log(response);
        props.history.push({
          pathname: "/home",
        });
      });
    } else {
      AddressService.addPerson(person).then((response) => {
        console.log(response);
        props.history.push({
          pathname: "/home",
        });
      });
    }
  };

  return (
    <div>
      <title>Address Book</title>
      {/* UC1 */}
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
      <div className="form-content">
        <form action="#" className="form" onSubmit={saveData}>
          <div className="form-head-content">
            <div className="form-head">Person Address Form</div>
            <div className="form-logo-content">
              <Link to="/home">
                <img
                  src="../assets/images/close.png"
                  alt=""
                  style={{ height: "25px" }}
                />
              </Link>
            </div>
          </div>
          
          
          {/* Name */}
          <div className="row-content">
            <label className="label text" htmlFor="name">
              Full Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={contact.name}
              onChange={(event) => {
                handleInput(event);
              }}
              required
            />
            <error-output className="name-error" htmlFor="text" />
          </div>
          
          
          {/* Address Tag */}
          <div className="row-content">
            <label className="label text" htmlFor="address">
              Address
            </label>
            <textarea
              className="input"
              id="address"
              name="address"
              style={{ height: "100px" }}
              required
              value={contact.address}
              onChange={(event) => {
                handleInput(event);
              }}
            />
            <error-output
              id="address-error"
              className="address-error"
              htmlFor="address"
            />
          </div>
          {/* City Tag */}
          <div className="row-content-exp">
            <div className="oneRow-content">
              <label className="label text" htmlFor="city">
                City
              </label>
              <select
                className="select-input"
                id="city"
                name="city"
                required
                value={contact.city}
                onChange={(event) => {
                  handleInput(event);
                }}
              >
                <option value selected disabled hidden>
                  Select City
                </option>
                <option value="Allahabad">Allahabad</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Bhubneswa">Bhubneswar</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Patna">Patna</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Vaishali">Vaishali</option>
                <option value="Ramgarh">Ramgarh</option>
                <option value="Hajipur">Hajipur</option>
              </select>
            </div>
            <div className="oneRow-content">
              <label className="label text" htmlFor="state">
                State
              </label>
              <select
                className="select-input"
                id="state"
                name="state"
                required
                value={contact.state}
                onChange={(event) => {
                  handleInput(event);
                }}
              >
                <option value selected disabled hidden>
                  Select State
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            {/* Zip Tag */}
            <div className="oneRow-content">
              <label className="label text" htmlFor="zip">
                Zip
              </label>
              <input
                className="input"
                type="text"
                name="zip"
                id="zip"
                value={contact.zip}
                onChange={(event) => {
                  handleInput(event);
                }}
                required
              />
            </div>
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="input"
              type="text"
              name="phone"
              id="phone"
              value={contact.phone}
              onChange={(event) => {
                handleInput(event);
              }}
              required
            />
            <error-output className="phone-error" htmlFor="text" />
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              value={contact.email}
              onChange={(event) => {
                handleInput(event);
              }}
              required
            />
            <error-output className="email-error" htmlFor="text" />`
          </div>
          <div className="add-reset">
            <button type="submit" className="button addButton" id="addButton">
              Add
            </button>
            <button
              type="button"
              onClick={resetData}
              className="resetButton button"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
