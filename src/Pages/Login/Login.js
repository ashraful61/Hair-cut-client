import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setAuthToken(user)
          navigate(from, { replace: true });
          // fetch('https://genius-car-server-nu-bice.vercel.app/jwt', {
          //   method: 'POST',
          //   headers: {
          //     "content-type":"application/json"
          //   },
          //   body: JSON.stringify(user)
          // })
          // .then(res => res.json())
          // .then(data => {
          //   console.log(data.token);
          //   localStorage.setItem('carToken', data.token)
          //   navigate(from, { replace: true });
          // })
        
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="hero w-full">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
        <div className="text-center lg:text-left">
          {/* <img className="w-3/4" src={loginImg} alt="" /> */}
          <h1 className="text-center text-5xl font-bold">Login Here</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4 py-4">
      
          <form onSubmit={handleLogin} className="card-body">
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
                type="text"
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
                <input  className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">Don't have an account ?<Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
