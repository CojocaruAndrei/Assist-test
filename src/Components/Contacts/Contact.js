import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contact.css";
const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputSurName, setInputSurName] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState([]);
  useEffect(async () => {
    const getItems = async () => {
      const res = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per page=100&context=embed"
      );
      console.log(res.data);
    };
    getItems();
  }, []);

  const phoneRegex = /\D/g;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "inputName") {
      setInputName(value);
    } else if (name === "inputSurName") {
      setInputSurName(value);
    } else if (name === "inputPhoneNumber") {
      setInputPhoneNumber(value);
    } else if (name === "inputEmail") {
      setInputEmail(value);
    }
  };

  const submitForm = () => {
    setForm([
      ...form,
      {
        name: inputName,
        surName: inputSurName,
        phoneNumber: inputPhoneNumber,
        email: inputEmail,
      },
    ]);

    setInputName("");
    setInputSurName("");
    setInputPhoneNumber("");
    setInputEmail("");
  };

  const validateInputs = (e) => {
    e.preventDefault();

    let errors = [];
    if (!inputName.trim().length > 0) {
      errors.push("Name is invalid");
    } else if (!inputSurName.trim().length > 0) {
      errors.push("SurName is invalid");
    } else if (
      !inputPhoneNumber.trim().length > 0 ||
      phoneRegex.test(inputPhoneNumber)
    ) {
      errors.push("Phone number is invalid");
    } else if (!inputEmail.trim().length > 0 || !emailRegex.test(inputEmail)) {
      errors.push("Email is invalid");
    }

    if (errors.length === 0) {
      submitForm();
    }

    setErrors(errors);
  };

  return (
    <div className="Contact--container">
      <div className="Contact--input">
        <label>Name</label>
        <input
          type="text"
          name="inputName"
          value={inputName ?? ""}
          onChange={(e) => onChange(e)}
        />
        <label>Surname</label>
        <input
          type="text"
          name="inputSurName"
          value={inputSurName ?? ""}
          onChange={(e) => onChange(e)}
        />
        <label>Phone number</label>
        <input
          type="text"
          name="inputPhoneNumber"
          value={inputPhoneNumber ?? ""}
          onChange={(e) => onChange(e)}
        />
        <label>Email</label>
        <input
          type="text"
          name="inputEmail"
          value={inputEmail ?? ""}
          onChange={(e) => onChange(e)}
        />

        <button onClick={(e) => validateInputs(e)}>Submit</button>
        <div>
          {errors?.map((error, index) => (
            <p style={{ color: "red", fontSize: "16px" }} key={index}>
              {error}
            </p>
          ))}
        </div>
        <div>
          {form?.map((elem, index) => (
            <div key={index}>
              <p>Name: {elem.name}</p>
              <p>surName: {elem.surName}</p>
              <p>phone: {elem.phoneNumber}</p>
              <p>email: {elem.email}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer--container">
        <div className="footer-alignt-text">
          <p>ASSIST Software 20222</p>
          <p>Created by: Andrei Cojocaru</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
