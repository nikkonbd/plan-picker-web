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
  // console.log(myUsers);

  // const { data: users = [], refetch } = useQuery(['users'], async () => {
  //     const res = await fetch('http://localhost:5000/users')
  //     return res.json()
  // })
  // console.log("AllUsers from DB", users);

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    setMyusers(res.data);
    return res.data;
  });

  //handleMake Admin
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          // Swal.fire({
          //     position: 'top-end',
          //     icon: 'success',
          //     title: `${user.name} is an admin now!`,
          //     showConfirmButton: false,
          //     timer: 1500
          // })
          toast.success(`${user.name} is an admin now!`);
        }
      });
  };

  //delete user
  const handleDelete = (_id) => {
    // console.log(_id);
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
        fetch(`http://localhost:5000/deleteuser/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              const remaining = myUsers.filter((user) => user._id !== _id);
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
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold">
          Total Users : {users.length}
        </h2>
        <div className="flex text-xl gap-3  md:text-2xl font-bold md:gap-10">
          <div className="flex gap-1 md:gap-2 md:p-2 items-center">
            <h2>Admin </h2>
            <PiUserSwitchBold color="green"></PiUserSwitchBold>
          </div>
          <div className="flex gap-1 md:gap-2 md:p-2 items-center">
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
                      <div className="mask mask-circle w-12 h-12">
                        <img src={user?.imgUrl} />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-xl">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="md:text-xl">{user?.email}</p>
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <button className="btn  btn-circle">
                      <PiUserSwitchBold
                        fontSize={30}
                        color="green"></PiUserSwitchBold>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn  btn-circle">
                      <FaUsers fontSize={30}></FaUsers>
                    </button>
                  )}
                  <Toaster />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn  btn-circle">
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
