import React from 'react';

const MediaAndPress = () => {
    return (
        <div>
            <div>
                <div className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                                Media & Press
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Welcome to our Media & Press page. Here you can find resources for journalists, bloggers, and media professionals interested in covering our company and products.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4">Press Kit</h3>
                                    <p className="text-lg">
                                        Download PlanPiker's press kit, which includes high-resolution images, logos, and company information for your use in media coverage.
                                    </p>
                                    <a href="/press-kit" className="mt-4 block text-lg underline hover:underline">
                                        Download Press Kit
                                    </a>
                                </div>
                                <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4">Press Releases</h3>
                                    <p className="text-lg">
                                        Stay up-to-date with our latest news and announcements. Read our press releases to get insights into our company's developments and achievements.
                                    </p>
                                    <a href="/press-releases" className="mt-4 block text-lg underline hover:underline">
                                        Read Press Releases
                                    </a>
                                </div>
                                <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4">Request Interviews</h3>
                                    <p className="text-lg">
                                        Interested in interviewing our team or experts? We're available for interviews and can provide insights on various topics related to our industry.
                                    </p>
                                    <a href="/request-interviews" className="mt-4 block text-lg underline hover:underline">
                                        Request Interviews
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto p-8">
                            <h2 className="text-4xl font-semibold mb-6">
                                Contact Media Relations
                            </h2>
                            <p className="text-lg mb-8">
                                For media inquiries, interview requests, and additional information, please contact our Media Relations team.
                            </p>
                            <div className="border-t border-white pt-4">
                                <h3 className="text-2xl font-semibold mb-4">Media Relations Contact:</h3>
                                <p className="text-lg">John Doe</p>
                                <p className="text-lg">Director of Media Relations</p>
                                <p className="text-lg">
                                    Email: <a href="mailto:media@yourwebsite.com" className="underline">media@yourwebsite.com</a>
                                </p>
                                <p className="text-lg">
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

export default MediaAndPress;