import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";
import { PiUserSwitchBold } from "react-icons/pi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Toaster, toast } from "react-hot-toast";

const AllUsers = () => {
  const [myUsers, setMyusers] = useState([]);

  // const { data: users = [], refetch } = useQuery(['users'], async () => {
  //     const res = await fetch('https://plan-picker-server-production-96ce.up.railway.app/users')
  //     return res.json()
  // })
  // console.log("AllUsers from DB", users);

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    setMyusers(res.data);
    return res.data;
  });
  console.log(myUsers);

  //handleMake Admin
  const handleMakeAdmin = (user) => {
    fetch(
      `https://plan-picker-server-production-96ce.up.railway.app/users/admin/${user?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          // toast.success(`${user.name} is an admin now!`);
        }
      });
  };

  //delete user
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://plan-picker-server-production-96ce.up.railway.app/deleteuser/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              const remaining = myUsers.filter((item) => item._id !== user._id);
              setMyusers(remaining);
              refetch();
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>AllUsers || PlanPicker</title>
      </Helmet>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold md:text-2xl">
          Total Users : {users.length}
        </h2>
        <div className="flex gap-3 text-xl font-bold md:text-2xl md:gap-10">
          <div className="flex items-center gap-1 md:gap-2 md:p-2">
            <h2>Admin </h2>
            <PiUserSwitchBold color="green"></PiUserSwitchBold>
          </div>
          <div className="flex items-center gap-1 md:gap-2 md:p-2">
            <h2>Users </h2>
            <FaUsers></FaUsers>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th className="hidden md:table-cell">Info</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="hidden md:table-cell">
                  <div className="flex items-center space-x-4">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img src={user?.imgUrl} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="md:text-xl">{user?.email}</p>
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <button className="btn btn-circle">
                      <PiUserSwitchBold
                        fontSize={30}
                        color="green"></PiUserSwitchBold>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-circle">
                      <FaUsers fontSize={30}></FaUsers>
                    </button>
                  )}
                  <Toaster />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-circle">
                    <FaTrashAlt
                      fontSize={26}
                      className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
