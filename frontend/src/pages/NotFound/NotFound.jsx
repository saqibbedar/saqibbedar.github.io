import { ErrorImages } from "@/assets/assets";
import { ErrorPage } from "@/components/common/common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/404");
  }, [])
  return (
    <div>
      Redirecting...
    </div>
  );
};

export default NotFound;
