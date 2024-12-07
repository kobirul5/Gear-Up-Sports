import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import GoogleIcon from "../assets/icons/google.png";
import Swal from "sweetalert2";

const Login = () => {
    const {setUser, theme, loginWithEmailPassword, handleGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        loginWithEmailPassword(email, password)
        .then((userdata) => {
            const user = userdata.user;
            setUser(user)
            navigate(location?.state ? location.state : '/')
            Swal.fire({
                title: 'Success',
                text: 'Login Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error!',
                text: `${errorMessage}`,
                icon: 'error',
                confirmButtonText: 'Close'
              })
          });

    }
    const handleGoogleLogin=()=>{
        handleGoogle()
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className={`card ${theme === 'light' ? 'bg-orange-100': ''}  max-w-sm lg:min-w-[500px] shrink-0 border`}>
                    <form onSubmit={handleLogin} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color hover:text-secondary">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center px-8 text-center gap-2">
                        <button onClick={handleGoogleLogin} className="flex gap-2 border border-primary hover:bg-primary hover:text-white p-2">
                            <img className="w-6" src={GoogleIcon} alt="" />
                            <p>Continue With Google</p>
                        </button>
                    </div>
                    <label className="label">
                        <Link to="/auth/signUp" className="label-text-alt link link-hover px-8 pb-8">Don't have an account? <span className="text-blue-600">Sign Up</span></Link>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;