import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const navigate = useNavigate()

export const handleUser = (saveUser) => {

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(saveUser)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                navigate('/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })





}