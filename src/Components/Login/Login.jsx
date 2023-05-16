import React, { useContext } from 'react';
import {FcGoogle} from "react-icons/fc"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || "/"
    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(res => {
           navigate(from,{replace:true})
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className='md:container'>
            <div className='border px-6 md:px-16 rounded-md py-20 md:py-40 md:w-6/12 mx-auto max-w-full'>
            <h1 className='text-3xl text-center font-bold mb-6'>Login With</h1>
            <div>
                <button onClick={handleGoogleSignIn} className='flex border-2 rounded-full px-3 py-3 w-full items-center text-xl font-semibold
                '><FcGoogle className='text-3xl'></FcGoogle> <p className='text-center mx-auto'>Continue with Google</p></button>
            {/* <p className='text-center font-medium mt-3'>Don’t have an account? <Link className='text-blue-600 underline' to='/register'>Create an account</Link></p> */}
            </div>
            </div>
        </div>
    );
};

export default Login;