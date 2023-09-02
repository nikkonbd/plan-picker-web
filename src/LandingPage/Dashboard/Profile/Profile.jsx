import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

const imgHostingToken = import.meta.env.VITE_Img_Upload_Token;

const Profile = () => {
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  const [imgURL, setImgURL] = useState("");

  const profileUpdateHandler = async (event) => {
    event.preventDefault();

    const imageFile = event.target.image.files[0];

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const response = await fetch(imgHostingUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const imgResponse = await response.json();
          const newImgURL = imgResponse.data.display_url;
          setImgURL(newImgURL); // Update the image URL state
          console.log(imgResponse);
        } else {
          console.error("Image upload failed:", response.status);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No image selected");
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile || PlanPicker</title>
      </Helmet>
      <div className="mx-4">
        <form onSubmit={profileUpdateHandler}>
          <p className="ms-10 mt-4 text-2xl mb-2">Welcome Ali H.</p>
          <div className="">
            <div className="flex items-center ms-2">
              {imgURL ? (
                <img
                  className="w-32 rounded-full ms-8 me-5 sm:w-24 my-4"
                  src={imgURL}
                  alt=""
                />
              ) : (
                <img
                  className="w-32 rounded-full ms-8 me-5 sm:w-24 my-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38RfA9Hzky4OMp9XXMSUqzC0LkQX8IGxx0A&usqp=CAU"
                  alt=""
                />
              )}

              <div>
                <div>
                  <div className="relative overflow-hidden border-[1px] rounded-md border-blue-gray-600 w-fit pe-1 mb-2">
                    <input
                      type="file"
                      name="image"
                      id="fileInput"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label htmlFor="fileInput" className=" p-1 ps-2 mb-2">
                      Upload File
                    </label>
                  </div>
                </div>
                <p className="text-blue-gray-400 me-6">
                  JPG, GIF OR PNG. MAX size of 5mb
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex items-center">
            <div>
              <p className="text-sm font-bold md:ms-10">Name</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Ali Hasan Mashrafi"
              />
            </div>
            <div>
              <p className="text-sm font-bold md:ms-10 mt-4 md:mt-0">Email</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="mdmasrafi902@gmail.com"
              />
            </div>
          </div>
          <div className="md:flex items-center">
            <div>
              <p className="mt-6 text-sm font-bold md:ms-10">Language</p>
              <select
                className="mt-2 md:ms-10 ps-3 md:w-96 w-full me-6 border-[1px] border-blue-gray-400 rounded-md h-9"
                name="language"
                id="language">
                <option value="">English</option>
                <option value="">Bangla</option>
                <option value="Arabic">Arabic</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-bold md:ms-10 mt-5">Number</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Your Contact Number"
              />
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="md:flex">
              <div>
                <p className="mt-6 text-sm font-bold md:ms-10">Data Format</p>
                <select
                  className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem]  border-[1px] border-blue-gray-400 rounded-md h-9"
                  name="language"
                  id="language">
                  <option value="">Bangladesh</option>
                  <option value="">India</option>
                  <option value="">Philippian</option>
                </select>
              </div>
              <div>
                <p className="mt-6 text-sm font-bold md:ms-10">Time Format</p>
                <select
                  className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem] border-[1px] border-blue-gray-400 rounded-md h-9"
                  name="language"
                  id="language">
                  <option value="">Asia/Dhaka</option>
                  <option value="">India, Sri Lanka Time</option>
                </select>
              </div>
            </div>
            <div className="md:ms-9">
              <p className="text-sm font-bold md:ms-10 mt-5">Address</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Your Address"
              />
            </div>
          </div>
          <input
            className="my-4 ms-10 bg-blue-700 text-white py-2 px-3 rounded-xl cursor-pointer"
            type="submit"
            value="Save Change"
          />
          <input
            className="ms-3 bg-red-500 text-white py-2 px-3 rounded-xl cursor-pointer"
            type="button"
            value="Cancel"
          />
        </form>
      </div>
    </>
  );
};

export default Profile;
