// import React, { useEffect, useState } from "react";
// import Loading from "../Loading/Loading";


// const AllHome = () => {
//   const [loading, setLoading] = useState([]);
//   const [homes, setHomes] = useState([]);
//   useEffect(() => {
//     setLoading(true);

//     fetch(`https://rent-home-server.vercel.app/allHomes`)
//       .then((response) => response.json())
//       .then((data) => {
//         setLoading(false);
//         setHomes(data);
//         console.log(data)
//       });
//   }, []);

//   return (
//     <section>
//       <div className="relative max-w-screen-xl px-4 py-8 mx-auto ">
//         <div className="grid items-start grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
//         {loading ? <Loading></Loading> : ""}
//         {homes.length > 0 &&
//           homes.map((home) => (
//             <BachelorsHomeCard key={home._id} home={home}></BachelorsHomeCard>
//           ))}
//       </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllHome;
