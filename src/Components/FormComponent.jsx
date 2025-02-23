import React, { useState } from "react";
import axios from "axios";

export default function FormComponent() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // State for response message
  const [responseMsg, setResponseMsg] = useState("");

  // Handle Input Change
  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault(); 

    try {
      const response = await axios.post("https://localhost/submit", formData);
      setResponseMsg("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      setResponseMsg("Error submitting form.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>

      {responseMsg && <p>{responseMsg}</p>}
    </div>
  );
}
