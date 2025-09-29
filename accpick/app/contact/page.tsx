"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Add API call or email integration
  };

  return (
    <div className="flex flex-col bg-gray-100 text-gray-900">
      {/* Header Section */}
      <div className="relative h-[800px] bg-black">
        <img
          src="/contact.jpg" // replace with your image path
          alt="Contact header"
          className="absolute inset-0 w-full h-full object-fill opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Contact and speak to one of our best support team</h1>
        </div>
      </div>

      {/* Form & Contact Info Section */}
      <div className="flex flex-col md:flex-row p-8 gap-8 bg-gray-100">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-100 p-6 shadow-md rounded-lg space-y-4"
        >
          <h2 className="text-xl font-bold mb-4">Send a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              className="border-2 p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="border-2 p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={form.subject}
              onChange={handleChange}
              className="border-2 p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message here"
            value={form.message}
            onChange={handleChange}
            className="border-2 p-2 rounded w-full h-28"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            SEND
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-200 text-gray-900 p-6 rounded-lg flex flex-row gap-6">
          {/* Left side: text */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <h2 className="text-xl font-bold">Say Hello to Us</h2>

            <div className="flex items-center gap-4">
              <Phone />
              <span>+27 33 940 1900</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail />
              <span>admin@accpick.co.za</span>
            </div>
          </div>

          {/* Right side: image */}
          <div className="flex-1 flex items-center justify-center">
            <img src="/bluelogo.jpeg" alt="Blue Logo" className="h-[80px]" />
          </div>
        </div>

      </div>
    </div>
  );
}
