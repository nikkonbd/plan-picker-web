import React from 'react';

const ContactSales = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-[#5EBEC4] to-purple- h-[40vh] py-16">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl font-extrabold text-white mb-4">
                        Talk to Our Sales Team
                    </h1>
                    <p className="text-white text-lg mb-8">
                        Choose from our tailored plans to meet your team's needs.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src="https://img.freepik.com/free-vector/co-workers-concept-landing-page_23-2148298380.jpg?w=1380&t=st=1694433659~exp=1694434259~hmac=8e821f249d458d451eaa440d6b95811e9ccb8fca1729ecb6a44488c6e767ac98"
                        alt="Team Planning"
                        className="object-cover w-full h-full opacity-30"
                    />
                </div>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Talk to Our Sales Team about Purchasing Plan Picker for Your Team
                        </h2>
                        <p className="text-gray-600 mb-8">
                            At PlanPicker, we are committed to providing you with the best scheduling solution for your team's needs. Our sales team is here to assist you every step of the way.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Whether you have questions about our pricing plans, need a customized solution, or just want to learn more about how PlanPicker can benefit your team, our friendly sales representatives are ready to chat with you.
                        </p>
                        <p className="text-gray-600 mb-8">
                            To get in touch with our sales team, please use the contact information below:
                        </p>
                        <div className="border-t border-gray-300 pt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Contact Information:</h3>
                            <p className="text-gray-600">Email: sales@planpicker.com</p>
                            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSales;