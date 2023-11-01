import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const url = `http://localhost:5001/userData?email=${user?.email}`;

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const handleProfile = async (data) => {
    console.log(data);

    try {
      // Assuming 'data' is defined somewhere in your code.
      const response = await fetch(
        `http://localhost:5001/update/users/${user.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json", // Corrected header name
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.acknowledged) {
          toast.success("Update user Successfully"); // Adjusted success message
          setLoading(false);
          navigate("/dashboard/myProfile");
        } else {
          // Handle the case where 'acknowledged' is not true
          console.error("Failed to update :", responseData);
        }
      } else {
        // Handle non-successful response, e.g., HTTP error codes
        console.error("Failed to update . HTTP status:", response.status);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error:", error);
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/bijoy/NFc/registerbg.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        // backgroundColor: '#cbd5e1'
      }}
      className=" bg-slate-50 h-full w-full"
    >
      <h2 className="text-center text-2xl mb-10 font-bold text-orange-500">
        Update Profile
      </h2>
      <div className=" bg-white border shadow-md m-4 p-2 lg:px-10 rounded-lg lg:py-5">
        <form
          className="user_form w-full"
          onSubmit={handleSubmit(handleProfile)}
        >
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-5 mt-5">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1 ">
                Name
              </label>
              <input
                placeholder=" Name"
                defaultValue={user?.displayName}
                required={true}
                type="text"
                {...register("name", {
                  required: "firstName",
                })}
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Email
              </label>
              <input
                placeholder="Email"
                required={true}
                defaultValue={user?.email}
                disabled
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Contact No
              </label>
              <input
                {...register("number")}
                required
                defaultValue={userData?.number}
                placeholder="Contact Number"
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Birth Date
              </label>
              <input
                placeholder="MM/DD/YYYY"
                {...register("dateOfBirth")}

                defaultValue={userData?.dateOfBirth}
                type="date"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>

            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                National Id
              </label>
              <input
                placeholder="National Id"
                {...register("nId")}
                required={true}
                defaultValue={userData?.nId}
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>{" "}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Birth Certificate No.
              </label>
              <input
                {...register("birthCertificateId")}
                placeholder="Birth Certificate No."
                required
                defaultValue={userData?.birthCertificateId}
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>

            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Passport No.
              </label>
              <input
                placeholder="Passport No"
                {...register("passportNo")}
                defaultValue={userData?.passportNo}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>{" "}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Present Address
              </label>
              <input
                placeholder="Present Address"
                {...register("presentAddress")}
                defaultValue={userData?.presentAddress}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>

            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Permanant Address
              </label>
              <input
                placeholder=" Permanant Address"
                {...register("parmanantAddress")}
                defaultValue={userData?.parmanantAddress}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>{" "}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Mailling Address
              </label>
              <input
                placeholder="Mailling Address"
                {...register("maillingAddress")}
                defaultValue={userData?.maillingAddress}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>

            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Emergency Contact No
              </label>
              <input
                placeholder=" Emergency Contact No"
                {...register("emergencyContactNo")}
                defaultValue={userData?.emergencyContactNo}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>{" "}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Father Name
              </label>
              <input
                placeholder="Father Name"
                {...register("fatherName")}
                defaultValue={userData?.fatherName}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Father Occupation
              </label>
              <input
                placeholder="Father Occupation"
                {...register("fatherOccupation")}
                defaultValue={userData?.fatherOccupation}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </div>
          <d iv className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Mother Name
              </label>
              <input
                placeholder="Mother Name"
                {...register("motherName")}
                defaultValue={userData?.motherName}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block text-xs   text-purple-900 font-bold  mb-1">
                Mother Occupation
              </label>
              <input
                placeholder="Mother Occupation"
                {...register("motherOccupation")}
                defaultValue={userData?.motherOccupation}
                required
                type="text"
                className="rounded-md focus:outline-none focus:border-primary  w-full py-2 px-3 border border-gray-300 text-black"
              />
            </div>
          </d>
          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button
              type="submit"
              className=" bg-gray-500 p-2 rounded text-white  hover:bg-black hover:text-white smooth mt-5"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
