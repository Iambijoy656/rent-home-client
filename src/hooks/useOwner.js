import { useEffect, useState } from "react";

const useOwner = (email) => {
  const [isOwner, setIsOwner] = useState(false);
  const [isAdminLoading, setIsOwnerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5001/users/owner/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsOwner(data.isOwner);
          setIsOwnerLoading(false);
        });
    }
  }, [email]);

  return [isOwner, isAdminLoading];
};

export default useOwner;
