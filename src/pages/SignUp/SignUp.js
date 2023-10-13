import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, signInWithGoogle, verifyEmail } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        handleVerifyEmail();
        toast.success(" Created Successfully");

        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then((result) => {
            userSaved(data.name, data.email, data.role);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22, error.message.length - 2);
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
        // console.log(userForDB);

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

  // veriEmail
  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {
        toast.success("Please Check your Email and verify for getting our services ");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const userSaved = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://rent-home-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("save data", data);
        navigate("/login");
      });
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-8 shadow-2xl">
        <h2 className="text-3xl text-center font-bold">SignUP</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs text-black bg-white">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs bg-white"
            />
            {errors.name && (
              <small className="text-error pt-2">{errors.name.message}</small>
            )}
          </div>
          <div className="form-control w-full max-w-xs bg-white text-black">
            <label className="label">
              {" "}
              <span className="label-text">Select Role</span>
            </label>
            <select
              {...register("role")}
              className="select select-ghost select-bordered w-full max-w-xs bg-white"
            >
              <option disabled selected>
                Owner Or Renter?
              </option>
              <option className="text-black bg-white">owner</option>
              <option className="text-black bg-white">renter</option>
            </select>
            {errors.role && (
              <small className="text-error pt-2">{errors.role.message}</small>
            )}
          </div>
          <div className="form-control w-full max-w-xs text-black">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs bg-white "
            />
            {errors.email && (
              <small className="text-error mt-2">{errors.email.message}</small>
            )}
          </div>

          <div className="form-control w-full max-w-xs text-black bg-white">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password at least six characters",
                },
                pattern: {
                  value: /[a-z]/,
                  message: "Your password must contain at least one letter.",
                },
                pattern: {
                  value: /(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
                  message:
                    "Your password must contain at least one Special Characters.",
                },
              })}
              className="input input-bordered w-full max-w-xs bg-white"
            />
            {errors.password && (
              <small className="text-error mt-2">
                {errors.password.message}
              </small>
            )}
          </div>
          <input
            className="btn bg-[#f97316] border-none hover:bg-orange-600 w-full my-3 text-white"
            value="Sign Up"
            type="submit"
          />
        </form>

        <p>
          Already have an account{" "}
          <Link to="/login" className="text-primary my-2">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform rounded-md bg-[#f97316] hover:bg-orange-600 focus:outline-none"
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

export default SignUp;
