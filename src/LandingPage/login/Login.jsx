import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { FaMicrosoft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
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
import SignUp from '../signUp/SignUp';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const { logIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

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

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User logIn Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* <Button className='bg-[#5EBEC4]' onClick={handleOpen}>Sign In</Button>
                <Dialog
                    size="md"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card className="w-full mx-auto md:max-w-2xl">
                        <CardHeader className='text-center py-3 bg-[#5EBEC4]'
                        >
                            <Typography variant="h3" color="white"> */}
            <Button className='bg-teal-500' onClick={handleOpen}>Sign In</Button>
            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="w-full mx-auto md:max-w-2xl">
                    <CardHeader className='py-3 text-center bg-teal-500'
                    >
                        <Typography variant="h3" color="white">
                            Plan Picker Sign In
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardBody className="flex flex-col gap-4">
                            <Input type='email' className='outline-none' label="Email" {...register("email", { required: true })} size="lg" />
                            {errors.email && <span>Email is Required!</span>}
                            <Input type='password' label="Password" {...register("password", { required: true })} size="lg" />
                            {errors.password && <span>Password is Required!</span>}
                            {/* <div className="-ml-2.5">
                                <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            <div className='px-6'>
                                <Button className='bg-[#5EBEC4]' variant="gradient" fullWidth>
                            </div> */}
                        </CardBody>
                        <div className='px-6'>
                            <Button className='' variant="gradient" fullWidth>
                                <input className="text-xl cursor-pointer" type="submit" value="Sign In" />
                            </Button>
                        </div>
                    </form>
                    <div className='px-6 my-3'>
                        <a className=''>
                            <Button onClick={handleGoogleSignIN} className='flex items-center justify-center w-full gap-4' variant="outlined"><FcGoogle className='text-xl text-teal-500'></FcGoogle>Sign In With Google</Button>
                        </a>
                    </div>
                    {/* <div className='px-6'>
                        <a className=''>
                            <Button className='flex items-center justify-center w-full gap-4' variant="outlined"><FaMicrosoft className='text-xl'></FaMicrosoft>Sign In With Microsoft</Button>
                        </a>
                    </div> */}
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="flex justify-center mt-6">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                <span><SignUp></SignUp></span>
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default Login;