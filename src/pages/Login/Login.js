import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, signInWithGoogle, forgotPassword } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        setLoginError("");
        // navigate(from, { replace: true })
        if (user.emailVerified) {
            navigate(from, { replace: true })
        }else{
          toast.error("Your Email is not verifird. please verify email")
        }
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22, error.message.length - 2);
        setLoginError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userForDB = {
          name: user?.displayName,
          email: user?.email,
          role: "renter",
        };
       

        fetch(`https://rent-home-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userForDB),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              navigate("/");
            }
            if (data.acknowledged) {
              toast.success("login successfully");
              navigate("/");
            }
          });
      })

      .catch((error) => console.error(error));
  };
  const handleModal = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });

    forgotPassword(email)
      .then(() => {
        Swal.fire(
          "Password Reset successfully!",
          "Please check your email.",
          "success"
        );
      })
      .catch(() => {
        Swal.fire(`Failed Reset password`);
      });
  };

  return (
    <div className="h-[800px]  flex justify-center items-center ">
      <div className="w-96 p-8 shadow-2xl border">
        <h2 className="text-3xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs text-black">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs bg-white"
            />
            {errors.email && (
              <p className="text-error mt-2">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs text-black">
            <label className="label">
              {" "}
              <span className="label-text">password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password at least six characters",
                },
              })}
              className="input input-bordered w-full max-w-xs bg-white text-black"
            />
            <label onClick={handleModal} className="label">
              {" "}
              <span className="label-text">forgot password?</span>
            </label>

            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn bg-[#f97316] hover:bg-orange-700 border-none w-full mt-3 text-white"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          If you new here{" "}
          <Link to="/signup" className="text-primary my-2">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium bg-[#f97316] text-white transition-colors duration-300 transform  rounded-md hover:bg-orange-700  focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
