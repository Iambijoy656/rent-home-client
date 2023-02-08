import React from "react";
import { useLocation } from "react-router-dom";

const AllHome = (props) => {
  const location = useLocation();

  const data = location.state?.data;
  // console.log(data);

  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto ">
        <div className="grid items-start grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AllHome;
