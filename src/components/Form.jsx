import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
    query: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/add", formData);

      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
      if(response.data.success){
        setFormData({
          name: "",
          phone: "",
          description: "",
          query: "",
          email: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="rounded-lg h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-900 font-times mt-5">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-300 mb-6">We'd love to hear from you!</p>

        <form className="m-7" onSubmit={handleSubmit}>
          {/* Name Field */}
          <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Phone Field */}
          <label className="block text-gray-300 text-sm mt-4 mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Description Field */}
          <label className="block text-gray-300 text-sm mt-4 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Query Field */}
          <label className="block text-gray-300 text-sm mt-4 mb-2" htmlFor="query">
            Query
          </label>
          <textarea
            id="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Enter your query"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Email Field */}
          <label className="block text-gray-300 text-sm mt-4 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
