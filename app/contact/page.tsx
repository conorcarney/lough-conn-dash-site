'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    message: '',
    isError: false
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus({ message: '', isError: false });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', isError: false });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus({ message: 'Failed to send message. Please try again.', isError: true });
      }
    } catch (error) {
      setStatus({ message: `An error ${error} occurred. Please try again later.`, isError: true });
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Contact Us
      </h1>
      
      <div className="max-w-2xl w-full">
        {status.message && (
          <div className={`p-4 mb-4 rounded-md ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status.message}
          </div>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded-md"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
