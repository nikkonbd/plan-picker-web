import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Name", "Email", "TransactionId", "Date", "Price"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const Billing = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [paymentUser, setPaymentUser] = useState([]);

  const { data: payment = [], refetch } = useQuery(["getPayment"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });

  useEffect(() => {
    const PremiumUser = payment?.filter((pu) => pu.email === user.email);
    // console.log(PremiumUser)
    if (PremiumUser) {
      setPaymentUser(PremiumUser);
    }
  }, [payment, user]);

  //   console.log(paymentUser);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#61677A] pb-4">
        User All Billing: {paymentUser.length}
      </h2>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentUser.map(
              ({ name, email, price, transactionId, _id, date }, index) => {
                const isLast = index === paymentUser.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={`${classes} border-e-2`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={`${classes} border-e-2`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {email}
                      </Typography>
                    </td>
                    <td className={`${classes} border-e-2`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {transactionId}
                      </Typography>
                    </td>
                    <td className={`${classes} border-e-2`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium">
                        {date.slice(0, 10)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {price}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Billing;
