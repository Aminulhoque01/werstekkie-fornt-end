'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center  px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Drop Us a Line</h2>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Have questions or need assistance? We're here to help. Reach out to our support team for any inquiries about your account, job applications, or employer services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
        <div>
          <div className="text-blue-600 text-4xl">🎧</div>
          <p className="font-semibold mt-2">Contact Us</p>
          <p className="text-gray-600">+48 654-430-309</p>
        </div>
        <div>
          <div className="text-blue-600 text-4xl">✈️</div>
          <p className="font-semibold mt-2">Email</p>
          <p className="text-gray-600">contact@hello.com</p>
        </div>
        <div>
          <div className="text-blue-600 text-4xl">📍</div>
          <p className="font-semibold mt-2">Address</p>
          <p className="text-gray-600">Seattle, Washington, USA</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6  rounded-lg w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 border rounded h-40 mb-4"
          onChange={handleChange}
          required
        ></textarea>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
