import React, { useContext } from 'react';
// import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='pt-4'>
            <p className='text-center font-bold'>Social Login</p>
            <p className='text-center my-3'>
                <button style={{border:'2px solid'}} onClick={handleGoogleLogin} className='btn btn-ghost'>
                <FaGoogle className='mr-3'></FaGoogle>
                    Google Login
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;