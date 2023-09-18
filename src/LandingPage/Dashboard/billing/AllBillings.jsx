import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const AllBillings = () => {
  const [allBillings, setAllBillings] = useState([]);

  const [axiosSecure] = useAxiosSecure();
  // const { user } = useContext(AuthContext);

  const { data: payments = [], refetch } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    setAllBillings(res.data);
    return res.data;
  });
  console.log(allBillings);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#61677A] pb-4">
        All Billings & Invoice: {allBillings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th className="hidden md:table-cell">Name</th>
              <th>Email</th>
              <th>TransactionId</th>
              <th>Date</th>
              <th>Card Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allBillings?.map((billing) => (
              <tr key={billing._id}>
                <td className="hidden md:table-cell">
                  <div className="">
                    <div>
                      <div className="font-semibold">{billing?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="">{billing?.email}</p>
                </td>
                <td>
                  <p className="">{billing?.transactionId}</p>
                </td>
                <td>
                  <p className="">{billing?.date.slice(0, 10)}</p>
                </td>
                <td>
                  <p className="">{billing?.cardId}</p>
                </td>
                {/* <td>
                  {user?.role === "admin" ? (
                    <button className="btn  btn-circle">
                      <PiUserSwitchBold
                        fontSize={30}
                        color="green"></PiUserSwitchBold>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="btn  btn-circle">
                      <FaUsers fontSize={30}></FaUsers>
                    </button>
                  )}
                  <Toaster />
                </td> */}
                <td>
                  <button className="btn  btn-circle">
                    <FaTrashAlt
                      fontSize={20}
                      className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBillings;
