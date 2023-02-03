import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <MoonLoader size={60} color="#f97316" />
    </div>
  );
};

export default Loading;
