import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider';


const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setAuthToken(user);
          Swal.fire({
            title: "Success!",
            text: "User created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          
          const userInfo = {
            displayName: name
          };
          updateUser(userInfo)
            .then(() => {
                navigate('/');
            })
            .catch((err) => console.log(err));
        
          
        })
        .catch(err=>console.log(err))

    }
    return (
        <div className="hero w-full">
          <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
            <div className="text-center lg:text-left">
              {/* <img className="w-3/4" src={loginImg} alt="" /> */}
                     <h1 className="text-center text-5xl font-bold">Sign Up</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 py-10">
      
              <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">Already have an account ?<Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      );
};

export default Signup;