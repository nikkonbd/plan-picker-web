import React from 'react';

const ExploreFeatures = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="py-6 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-semibold">Explore Features</h1>
        <p className="mt-2 text-lg">Discover what our schedule selection website has to offer.</p>
      </header>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">Feature 1</h2>
            <p className="mt-4">Description of Feature 1 goes here.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">Feature 2</h2>
            <p className="mt-4">Description of Feature 2 goes here.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">Feature 3</h2>
            <p className="mt-4">Description of Feature 3 goes here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreFeatures;
