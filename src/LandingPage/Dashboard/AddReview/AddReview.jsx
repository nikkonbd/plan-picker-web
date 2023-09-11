import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Rating from "react-rating";
import toast from "react-hot-toast";
const AddReview = () => {
  const [star, setStar] = useState(0);
  const { user } = useContext(AuthContext);
  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    const reviewData = {
      name,
      email,
      review,
      profilePic: user?.photoURL,
      star: star,
    };
    console.log(reviewData);
    // form.reset();
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // reset();
          form.reset();
          toast.success("user created Successfuly");
          // navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error.message}`);
      });
  };
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-[#42a6ad] text-2xl font-semibold">
          Give your feedback here
        </h1>
        <form
          onSubmit={addReview}
          className="mt-4 border-2 border-[#42a6ad] p-5 rounded-lg">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerName" className="text-sm">
                Name
              </label>
              <input
                defaultValue={user?.displayName}
                id="name"
                name="name"
                type="text"
                className="input input-bordered input-accent w-full h-9 ps-3 rounded-md text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm">
                Email
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                id="email"
                name="email"
                type="email"
                className="input input-bordered input-accent w-full h-9 ps-3 rounded-md text-gray-900"
              />
              <p className="text-sm text-amber-900">cannot change your email</p>
            </div>
            <div className="col-span-full sm:col-span-3 flex items-center">
              <p>Give some starts:</p>
              <Rating
                onChange={(rate) => setStar(rate)}
                fractions={4}
                placeholderRating={star}
                emptySymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-gray-300 dark:text-white-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }
                placeholderSymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-yellow-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }
                fullSymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-yellow-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }></Rating>
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">
                Review
              </label>
              <textarea
                rows={3}
                id="review"
                name="review"
                type="text"
                placeholder="Place your review here"
                className="textarea input-bordered input-accent w-full rounded-md ps-2"
              />
            </div>
            <div className="col-span-full w-full text-right mt-3">
              <input
                type="submit"
                value="Review"
                className="px-4 cursor-pointer py-2 bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
