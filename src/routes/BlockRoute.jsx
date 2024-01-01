import {useEffect} from "react";
import {useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";
const BlockRoute = ({children}) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return children;
};

export default BlockRoute;
