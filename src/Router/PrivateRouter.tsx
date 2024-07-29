import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const state = useSelector((state: any) => state.user);
  return <div>{state ? <div>{children}</div> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
