import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto">

          {/* Contact Title */}
          <h1 className="text-3xl md:text-5xl text-center text-pink-500 font-bold mt-12 mb-6">Contact Us</h1>

          {/* Contact Information Section */}
          <div className="bg-white rounded-lg text-black shadow-lg p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Information</h2>
            <div className="space-y-2">
              <div><span className="font-bold">Name:</span> BookHaven</div>
              <div><span className="font-bold">Contact Number:</span> +1 123-456-7890</div>
              <div><span className="font-bold">Email:</span> info@bookhaven.com</div>
              <div><span className="font-bold">Address:</span> 123 Book Street, Toronto, Canada</div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Have any queries? <span className="text-pink-500 block md:inline">Send message</span></h2>

            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border rounded-md outline-none text-sm text-gray-600"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md outline-none text-sm text-gray-600"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter Your Message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md outline-none text-sm text-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
