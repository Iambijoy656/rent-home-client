import { useEffect, useState } from "react";

const useRenter = (email) => {
  const [isRenter, setIsRenter] = useState(false);
  const [isRenterLoading, setIsRenterLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://rent-home-server.vercel.app/users/renter/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsRenter(data.isRenter);
          setIsRenterLoading(false);
        });
    }
  }, [email]);

  return [isRenter, isRenterLoading];
};

export default useRenter;
