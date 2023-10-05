import React from "react";

const ContactSupport = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-200 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-8">
            <h2 className="text-4xl font-semibold mb-6">
              Feedback and Suggestions
            </h2>
            <p className="text-lg mb-8">
              We value your feedback! If you have suggestions for improvement,
              feature requests, or any comments, please let us know. Your input
              helps us serve you better.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Contact Support
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We're here to assist you! Whether you have questions, encounter
              issues, or need help, our support team is dedicated to providing
              you with prompt and effective assistance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Request Assistance
                </h3>
                <p className="text-lg">
                  To request support, please fill out the form below. Our
                  support team will get back to you as soon as possible.
                </p>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-lg">
                  Check our FAQ section for answers to common questions and
                  troubleshooting tips. You might find a solution to your query
                  right away!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Support Email</h3>
                <p className="text-lg text-gray-600">
                  Have a question? Send us an email at{" "}
                  <a
                    href="mailto:support@yourwebsite.com"
                    className="underline">
                    support@yourwebsite.com
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-lg text-gray-600">
                  You can reach our support team by phone at{" "}
                  <a href="tel:+1234567890" className="underline">
                    +1 (123) 456-7890
                  </a>
                  . We're available during business hours.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-lg text-gray-600">
                  Need quick assistance? Chat with our support agents by
                  clicking the "Chat Now" button at the bottom right of your
                  screen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                <p className="text-lg text-gray-600">
                  Visit our office at:
                  <br />
                  123 Support Street
                  <br />
                  Suite 456
                  <br />
                  Supportville, CA 98765
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
