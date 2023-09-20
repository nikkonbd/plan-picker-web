import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_Img_Upload_Token;

const Profile = () => {
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  const [imgUrl, setImgUrl] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const { user } = useContext(AuthContext);
  // console.log(user);

  const { data: users = [], refetch } = useQuery(["users/email"], async () => {
    const res = await axiosSecure.get(`/users/${user?.email}`);
    return res.data;
  });

  // console.log(users);

  // console.log(imgUrl);

  const profileUpdateHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const imageFile = form.image.files[0];
    const name = form.name.value;
    const email = form.email.value;
    const language = form.language.value;
    const number = form.number.value;
    const country = form.country.value;
    const timezone = form.timezone.value;
    const address = form.address.value;

    const data = {
      name,
      email,
      imgUrl: imgUrl,
      language,
      number,
      country,
      timezone,
      address,
    };
    // console.log('25', data);

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
          setImgUrl(newImgURL); // Update the image URL state
          // console.log(imgUrl);
        } else {
          console.error("Image upload failed:", response.status);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No image selected");
    }

    fetch(`http://localhost:5000/updateuser/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(71, data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Profile Updated Succesfully",
            icon: "success",
            confirmButtonText: "wow!",
          });
        }
      });
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Profile || PlanPicker</title>
      </Helmet>
      <div className="mx-4">
        <form onSubmit={profileUpdateHandler}>
          <p className="ms-10 mt-4 text-2xl mb-2">
            Welcome {user?.displayName}
          </p>
          <div className="">
            <div className="flex items-center ms-2">
              {users[0]?.imgUrl ? (
                <img
                  className="w-32 rounded-full ms-8 me-5 sm:w-24 my-4"
                  src={users[0]?.imgUrl}
                  alt=""
                />
              ) : (
                <img
                  className="w-32 rounded-full ms-8 me-5 sm:w-24 my-4"
                  // src={users[0]?.imgUrl}
                  src={user.photoURL}
                  alt="myProfile"
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
                name="name"
                id=""
                placeholder="Enter Your Name"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <p className="text-sm font-bold md:ms-10 mt-4 md:mt-0">Email</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name="email"
                id=""
                placeholder="xyz@gmail.com"
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className="md:flex items-center">
            <div>
              <p className="mt-6 text-sm font-bold md:ms-10">Language</p>
              <select
                defaultValue={users[0]?.language}
                className="mt-2 md:ms-10 ps-3 md:w-96 w-full me-6 border-[1px] border-blue-gray-400 rounded-md h-9"
                name="language"
                id="language">
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Arabic">Arabic</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-bold md:ms-10 mt-5">Number</p>
              <input
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name="number"
                id=""
                placeholder="Your Contact Number"
                defaultValue={users[0]?.number}
              />
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="md:flex">
              <div>
                <p className="mt-6 text-sm font-bold md:ms-10">Data Format</p>
                <select
                  defaultValue={users[0]?.country}
                  className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem]  border-[1px] border-blue-gray-400 rounded-md h-9"
                  name="country"
                  id="country">
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Philippian">Philippian</option>
                </select>
              </div>
              <div>
                <p className="mt-6 text-sm font-bold md:ms-10">Time Format</p>
                <select
                  defaultValue={users[0]?.timezone}
                  className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem] border-[1px] border-blue-gray-400 rounded-md h-9"
                  name="timezone"
                  id="timezone">
                  <option value=" Asia/Dhaka">Asia/Dhaka</option>
                  <option value="India">India</option>
                  <option value="Srilanka"> SriLanka </option>
                </select>
              </div>
            </div>
            <div className="md:ms-9">
              <p className="text-sm font-bold md:ms-10 mt-5">Address</p>
              <input
                defaultValue={users[0]?.address}
                className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-full h-9 border-[1px] border-blue-gray-400 rounded-md"
                type="text"
                name="address"
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
            onClick={() => handleCancel()}
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
