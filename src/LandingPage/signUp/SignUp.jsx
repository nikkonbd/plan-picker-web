import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { AuthContext } from '../../providers/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userCreated } from '../../store/features/users/userSlice';
import { FcGoogle } from 'react-icons/fc';


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;


const SignUp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    //React Hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //reducer
    const dispatch = useDispatch()
    const users = useSelector(state => console.log(state.auth.user))



    //image hosting 
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    //Email and Password
    const onSubmit = data => {
        //for image
        const formData = new FormData()
        formData.append('image', data.imgUrl[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgUrl = imageResponse.data.display_url
                    console.log(imgUrl);
                    const { name, email, password } = data
                    const newData = { name, email, imgUrl }

                    //firebase
                    createUser(email, password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log('new-user', loggedUser);
                            updateUserProfile(loggedUser, name, imgUrl)
                            console.log(newData);
                            dispatch(userCreated({ newData }))
                            //to backend
                            fetch('http://localhost:5000/users', {
                                method: "POST",
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        reset()
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User Created Succesfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate('/')
                                    }
                                })
                        })
                }
            })
    };

    //GoogleLogin
    const handleGoogleSignIN = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, imgUrl: loggedUser.photoURL }
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User Created Succesfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/')
                        }

                    })
                // 
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <h2 className='cursor-pointer' onClick={handleOpen}>Sign Up</h2>
            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[42rem]">
                    <CardHeader className='text-center py-3 bg-[#5EBEC4]'
                    >
                        <Typography variant="h3" color="white">
                            Plan Picker Sign Up
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardBody className="flex flex-col gap-4">
                            <Input type='text' className='outline-none' label="Name" {...register("name", { required: true })} size="lg" />
                            {/* <Input className='outline-none' label="Image Url" {...register("imgUrl", { required: true })} size="lg" /> */}

                            {/* {errors.name && <span>Email is Required!</span>} */}
                            <Input className='outline-none' type='email' label="Email" {...register("email", { required: true })} size="lg" />
                            {errors.email && <span>Email is Required!</span>}
                            <Input type='password' label="Password" {...register("password", { required: true })} size="lg" />
                            {errors.password && <span>Password is Required!</span>}
                            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-full" {...register("imgUrl", { required: true })} />
                            {/* <div className="-ml-2.5">
                                <Checkbox label="Remember Me" />
                            </div> */}
                        </CardBody>
                        <div className='px-6'>
                            <Button variant="gradient" fullWidth>
                                <input className="text-xl cursor-pointer" type="submit" value="Sign Up" />
                            </Button>
                        </div>
                    </form>
                    <div className='px-6 my-3'>
                        <a className=''>
                            <Button onClick={handleGoogleSignIN} className='w-full flex items-center justify-center gap-4' variant="outlined"><FcGoogle className='text-xl text-teal-500'></FcGoogle>Sign In With Google</Button>
                        </a>
                    </div>
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Typography
                                as="a"
                                variant="small"
                                className="ml-1 text-[#5EBEC4] font-bold cursor-pointer"
                                onClick={handleOpen}
                            >
                                Sign In
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default SignUp;