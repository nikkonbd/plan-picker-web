import React from "react";

const ExploreFeatures = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="hero h-[300px]"
        style={{
          backgroundImage:
            "url(https://isaless.wpenginepowered.com/wp-content/uploads/2021/07/ISS_Blog-Feature-Channel-Partner_v1_07-13-21.png)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-[#5EBEC4]">
              Explore Features!
            </h2>
            <p className="pt-4">
              Discover what our schedule selection website has to offer.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">Creating Custom Schedule</h2>
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-with-calendar-man_23-2148557562.jpg?w=826&t=st=1693820799~exp=1693821399~hmac=a7d092b3122e27d885885c968c0ac376e1af9d381ebef5ffb8bc822a7b214b78"
              alt="Feature 1"
              className="mt-4 rounded-lg w-full h-auto"
            />
            <p className="mt-4">
              At Plan Picker, we understand that one size doesn't fit all when
              it comes to scheduling. That's why we've introduced our
              cutting-edge Custom Scheduling feature to give you the flexibility
              you need to plan your time the way you want it.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">Meet With Team</h2>
            <img
              src="https://img.freepik.com/free-vector/people-sitting-cafe-flat-design_52683-21568.jpg?w=826&t=st=1693821835~exp=1693822435~hmac=711f786ef58d10c3f7797a047fe79df652743f155f1258142d338ac9d46b12b3"
              alt="Feature 2"
              className="mt-4 rounded-lg w-full h-auto"
            />
            <p className="mt-4">
              At Plan Picker, we believe in the power of connection and
              collaboration. That's why we've introduced the "Meet with Our
              Team" feature to bring you closer to the experts behind our
              products and services. Whether you have questions, need
              assistance, or simply want to get to know the faces behind the
              brand, our team is just a click away.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold">
              Explore All Kind Of Schedule
            </h2>
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg?w=826&t=st=1693821280~exp=1693821880~hmac=053c7368d8328cb09d86d19d1dbdfac0cb4216480db955f9cdb01cce696132bf"
              alt="Feature 3"
              className="mt-4 rounded-lg w-full h-auto"
            />
            <p className="mt-4">
              Are you tired of the hassle of managing schedules for your
              business, organization, or personal life? Look no further! Our
              scheduling platform offers a comprehensive suite of features
              designed to simplify your scheduling needs. Whether you're a busy
              professional, a small business owner, or part of a larger
              organization, we've got you covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreFeatures;
