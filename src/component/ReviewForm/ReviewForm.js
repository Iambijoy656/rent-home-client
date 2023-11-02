// import React, { useContext, useState } from "react";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import { Controller, useForm } from "react-hook-form";

// import Swal from "sweetalert2";
// import { AuthContext } from "../../context/AuthProvider";
// import { useNavigate } from "react-router-dom";

// const ReviewForm = ({ home }) => {
//   const { user } = useContext(AuthContext);
// //   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({});

//   const onSubmit = async (data) => {
//     // setIsLoading(true);
//     if (!user.email) {
//     //   setIsLoading(false);
//       Swal.fire({
//         title: "You want to login?",
//         text: "You must have to login before rating!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, Login",
//         cancelButtonText: "No",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login");
//         } else {
//           console.log("yess");
//         //   setIsLoading(false);
//         }
//       });
//     } else {
//       //   data.customer = user.email;
//       //   data.product = id;
//       console.log(data);

//       //   try {
//       //     const res = await api.post("/post-product-review", data);
//       //     if (res?.status === 200) {
//       //       toast.success("Review Submitted Successfully");
//       //       setIsLoading(false);
//       //     }
//       //   } catch (err) {
//       //     console.log(err);
//       //     setIsLoading(false);
//       //   }
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex items-center gap-4 text-sm tracking-wider">
//           <div id="rating_label">Your rating of this product</div>
//           <Controller
//             control={control}
//             name="ratings"
//             rules={{
//               validate: (ratings) => ratings > 0,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Rating
//                 value={value}
//                 style={{ maxWidth: 110 }}
//                 isRequired
//                 onChange={onChange}
//                 visibleLabelId="rating_label"
//                 onBlur={onBlur}
//               />
//             )}
//           />
//           {errors.rating && (
//             <div className="text-xs text-rose-500">Rating is required.</div>
//           )}
//         </div>

//         {user.email && (
//           <div className="flex items-center gap-2 my-4">
//             <div className="form-control w-full max-w-xs ">
//               <input
//                 type="text"
//                 // {...register("name", {
//                 //   required: "Name Address is required",
//                 // })}
//                 // placeholder="Name"
//                 // required={true}
//                 value={user.displayName}
//                 disabled
//                 className="input input-bordered w-full max-w-xs rounded-none focus:outline-none focus:border-warning"
//               />
//             </div>
//             <div className="form-control w-full max-w-xs ">
//               <input
//                 type="email"
//                 // {...register("email", {
//                 //   required: "Email Address is required",
//                 // })}
//                 // placeholder="Email"
//                 // required={true}
//                 value={user?.email}
//                 disabled
//                 className="input input-bordered w-full max-w-xs rounded-none focus:outline-none focus:border-warning"
//               />
//             </div>
//           </div>
//         )}

//         <button
//           className="btn bg-orange-500 w-full my-3 rounded-none text-white hover:bg-black hover:text-white duration-500 ease-in-out"
//           type="submit"
//         >
//           <span>Submit review</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;
