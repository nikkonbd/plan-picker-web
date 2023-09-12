import React from 'react';

const ContactSupport = () => {
    return (
        <div>
            <div>
                <div className="bg-gradient-to-r from-[#42a6ad] to-[#5EBEC4] text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto p-8">
                            <h2 className="text-4xl font-semibold mb-6">
                                Need Help? Contact Our Support Team
                            </h2>
                            <p className="text-lg mb-8">
                                Our dedicated support team is here to assist you with any questions or issues you may have. We're committed to providing you with the best possible assistance.
                            </p>
                            <p className="text-lg mb-8">
                                Don't hesitate to reach out if you need help with product usage, technical support, or have any feedback or suggestions. We value your input!
                            </p>
                            <div className="border-t border-white pt-4">
                                <h3 className="text-2xl font-semibold mb-4">Contact Information:</h3>
                                <p className="text-lg mb-2">
                                    Email: <a href="mailto:sales@planpicker.com" className="underline">sales@planpicker.com</a>
                                </p>
                                <p className="text-lg mb-2">
                                    Phone: <a href="tel:+1234567890" className="underline">+1 (123) 456-7890</a>
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