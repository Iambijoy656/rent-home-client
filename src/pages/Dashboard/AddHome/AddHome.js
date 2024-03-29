import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import VedioUploader from "../../../utilities/axios/VedioUploader";
import Loading from "../../Loading/Loading";

const AddHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [vedioUrl, setVedioUrl] = useState(null);

  // console.log("vedio", vedioUrl);

  const [type, setType] = useState("");

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddHome = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const owner_name = form.name?.value;
    const email = form.email?.value;
    const gender = form.gender?.value;
    const type = form.type?.value;
    const address = form.address?.value;
    const district = form.district?.value;
    const room_type = form.roomType?.value;
    // const available = form.available?.value;
    const need_room_mates = form.need_room_mates?.value;
    const owner_number = form.number?.value;
    const date = form.date?.value;
    const rent = parseFloat(form.rent?.value);
    const description = form.description?.value;

    if (description.length < 160) {
      return toast.error("description minimum should be 160 characters");
    }

    const imageUrls = [];

    const uploadImage = async (image) => {
      if (!image) return null;
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      if (imgData.success) {
        return imgData.data.url;
      }
      return null;
    };

    try {
      const img1Url = await uploadImage(img1);
      const img2Url = await uploadImage(img2);
      const img3Url = await uploadImage(img3);

      if (img1Url) imageUrls.push(img1Url);
      if (img2Url) imageUrls.push(img2Url);
      if (img3Url) imageUrls.push(img3Url);

      const homeDetails = {
        image: imageUrls,
        date,
        need_room_mates,
        gender,
        type,
        room_type,
        rent,
        address,
        // available,
        district,
        owner_name,
        owner_number,
        description,
        email,
        vedio: vedioUrl,
      };

      fetch("https://rent-home-server.vercel.app/add-home", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(homeDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add Home Successfully");

            form.reset();
            setVedioUrl(null)
            setLoading(false);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section class="w-full max-w-2xl px-6 py-4 mx-auto rounded-md shadow-md my-10">
        <h2 class="text-3xl font-semibold text-center text-gray-800">
          Add Home
        </h2>
        <form onSubmit={handleAddHome} className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            <div className="w-full mx-2">
              <label className="block mb-2 text-sm font-medium text-black">
                Name
              </label>

              <input
                defaultValue={user?.displayName}
                readOnly
                name="name"
                className="block w-full px-4 py-2 text-black bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                Email
              </label>

              <input
                defaultValue={user?.email}
                readOnly
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="my-2 flex justify-center items-start">
            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                address
              </label>

              <input
                name="address"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="address"
                required
              />
            </div>

            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                District
              </label>

              <input
                name="district"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="district"
                required
              />
            </div>
          </div>

          <div className="my-2 flex justify-center items-start">
            <div class="w-full mx-2 mt-4 md:mt-0">
              <div class="mb-4">
                <label
                  for="type"
                  class="block text-gray-700 font-medium text-sm mb-2"
                >
                  Type
                </label>
                <select
                  onChange={(e) => setType(e.target.value)}
                  id="type"
                  name="type"
                  required
                  class="select select-bordered w-full max-w-xs bg-white text-black"
                >
                  <option disabled selected value="">
                    bechalors or family
                  </option>
                  <option>family</option>
                  <option>bechalors</option>
                </select>
              </div>
            </div>
            {/* <div class="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-black">
              Abailable
            </label>

            <input
              name="available"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="true"
              required
            />
          </div> */}
          </div>

          {type === "family" ? (
            ""
          ) : (
            <div className="my-2 flex justify-center items-start">
              <div class="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-black">
                  gender
                </label>

                <input
                  name="gender"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  placeholder="gender"
                />
              </div>

              <div class="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-black">
                  Need Room Mates(if it is bechalors home)
                </label>

                <input
                  name="need_room_mates"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="number"
                  placeholder="need room mates"
                />
              </div>
            </div>
          )}

          <div className="my-2 flex justify-center items-start">
            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                Phone Number
              </label>

              <input
                name="number"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="number"
                required
              />
            </div>

            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                Room Type
              </label>

              <input
                name="roomType"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="two room / three room"
                required
              />
            </div>
          </div>

          <div className="my-2 flex justify-center items-start">
            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                Date
              </label>

              <input
                name="date"
                className="block w-full px-4 py-2 text-gray-700 bg-gray-200"
                type="date"
                placeholder="15-01-2023"
                required
              />
            </div>

            <div class="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-black">
                Rent
              </label>

              <input
                name="rent"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="50000 / 60000"
                required
              />
            </div>
          </div>

          <div className="my-3 flex justify-center items-start">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">image1</span>
              </label>
              <input
                onChange={(e) => setImg1(e.target.files[0])}
                type="file"
                multiple
                name="img1"
                className="input  w-full max-w-xs bg-white text-black"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">image2</span>
              </label>
              <input
                onChange={(e) => setImg2(e.target.files[0])}
                type="file"
                className="input  w-full max-w-xs bg-white text-black"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Image3</span>
              </label>
              <input
                onChange={(e) => setImg3(e.target.files[0])}
                type="file"
                className="input  w-full max-w-xs bg-white text-black"
                required
              />
            </div>
          </div>

          {vedioUrl ? (
            <video controls className="w-44 h-28">
              <source
                src={vedioUrl}
                // type="video/mp4"
              />
            </video>
          ) : (
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Video (optional)</span>
              </label>
              <input
                onChange={async (e) =>
                  setVedioUrl(await VedioUploader(e.target.files[0]))
                }
                type="file"
                accept="video/*"
                className="input w-full max-w-xs bg-white text-black"
              />
            </div>
          )}

          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 ">
              Description
            </label>

            <textarea
              name="description"
              class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border bottom-1 "
              required
            ></textarea>
          </div>
          {loading ? <Loading></Loading> : ""}

          <div className="flex justify-center mt-6">
            <button className="block px-5 py-3 ml-3  font-bold text-white bg-orange-500 rounded hover:bg-orange-600 hover:transition ease-in-out duration-150">
              Add Home
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddHome;
