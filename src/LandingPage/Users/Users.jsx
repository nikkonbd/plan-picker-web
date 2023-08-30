import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulated data fetching
        fetch('/api/users')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleMakeAdmin = user => {
        // Simulated API call to update user role to admin
        fetch(`/api/users/admin/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: 'admin' })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    // Simulated data refetch
                    // You can replace this with a real refetching mechanism
                    setUsers(prevUsers => prevUsers.map(prevUser => prevUser._id === user._id ? { ...prevUser, role: 'admin' } : prevUser));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.error('Error making user admin:', error));
    };

    const handleMakeInstructor = user => {
        // Simulated API call to update user role to instructor
        fetch(`/api/users/instructor/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: 'instructor' })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    // Simulated data refetch
                    // You can replace this with a real refetching mechanism
                    setUsers(prevUsers => prevUsers.map(prevUser => prevUser._id === user._id ? { ...prevUser, role: 'instructor' } : prevUser));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.error('Error making user instructor:', error));
    };

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table tab-rounded-lg md:w-[90%] mx-auto">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-bold text-gray-600 bg-base-300 flex justify-around'>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody className='hover'>

                        {
                            users.map((user, index) => <tr key={user._id}>

                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold capitalize">
                                        {
                                            user?.role ? <span>{user.role}</span> : <span>User</span>
                                        }
                                    </div>
                                </td>
                                <td>
                                    {
                                        user?.role === 'admin' ? <button className="btn btn-neutral btn-xs capitalize" disabled>Make Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-neutral btn-xs capitalize">Make Admin</button>
                                    }
                                </td>
                                <th>
                                    {
                                        user?.role === 'instructor' ? <button className="btn btn-neutral btn-xs capitalize" disabled>Make Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className="btn btn-neutral btn-xs capitalize">Make Instructor</button>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
