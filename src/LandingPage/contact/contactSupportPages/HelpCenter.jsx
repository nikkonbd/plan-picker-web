import React from 'react';

const HelpCenter = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#42a6ad]  to- text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto p-8">
                        <h2 className="text-4xl font-semibold mb-6">
                            Explore Our Help Center
                        </h2>
                        <p className="text-lg mb-8">
                            Welcome to our Help Center! Here, you'll find a wealth of information, guides, and answers to frequently asked questions to assist you with any queries you may have.
                        </p>
                        <p className="text-lg mb-8">
                            Our goal is to provide you with comprehensive resources to make your experience as smooth as possible. Feel free to browse through our articles and find solutions to common issues.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4">Knowledge Base</h3>
                                <p className="text-lg">
                                    Dive into our extensive knowledge base to find detailed articles and tutorials on using our products and services.
                                </p>
                                <a href="/knowledge-base" className="mt-4 block text-lg underline hover:underline">
                                    Explore Knowledge Base
                                </a>
                            </div>
                            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
                                <p className="text-lg">
                                    If you can't find the answer you're looking for, don't hesitate to reach out to our support team. We're here to help!
                                </p>
                                <a href="/contact-support" className="mt-4 block text-lg underline hover:underline">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Explore some of the most common questions our customers ask. If you don't find what you're looking for, visit our Help Center for more information.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How do I get started with your product?</h3>
                                <p className="text-lg text-gray-600">
                                    Our Getting Started guide provides step-by-step instructions to help you kickstart your journey.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Is there a mobile app available?</h3>
                                <p className="text-lg text-gray-600">
                                    Yes, we have a mobile app for both iOS and Android. You can download it from the App Store or Google Play Store.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">What is your refund policy?</h3>
                                <p className="text-lg text-gray-600">
                                    We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can request a refund within 30 days of purchase.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How can I contact your support team?</h3>
                                <p className="text-lg text-gray-600">
                                    You can contact our support team through email, phone, or live chat. Visit our Contact Support page for details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;