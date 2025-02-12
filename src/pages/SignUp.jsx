import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { user, setUser,theme, signUpWithEmailPassword, updatedProfileInfo } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return Swal.fire({
                title: 'Error',
                text: 'Password must be at least 6 characters long and include both uppercase and lowercase letters',
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }

        signUpWithEmailPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                
                updatedProfileInfo({displayName: name, photoURL: photo})
                .then(result=>{
                    Swal.fire({
                        title: 'Success',
                        text: 'Sign Up Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                    navigate('/')
                })
                .catch(error=>{
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
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className={`card ${theme === 'light' ? 'bg-orange-100': ''} w-full max-w-sm lg:min-w-[600px] shrink-0 border`}>
                    <form onSubmit={handleSignUp} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color hover:text-secondary">Sign Up</button>
                        </div>
                    </form>
                    <label className="label">
                        <Link to="/auth/login" className="label-text-alt link link-hover px-8 pb-8">Have an account? <span className="text-blue-600">Login</span></Link>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUp;