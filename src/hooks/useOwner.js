import { useEffect, useState } from "react";

const useOwner = (email) => {
  const [isOwner, setIsOwner] = useState(false);
  const [isOwnerLoading, setIsOwnerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://rent-home-server.vercel.app/users/owner/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsOwner(data.isOwner);
          setIsOwnerLoading(false);
        });
    }
  }, [email]);

  return [isOwner, isOwnerLoading];
};

export default useOwner;
