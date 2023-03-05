import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/data/data.slice";

const Popup = ({ children }) => {
  const isOpen = useSelector((state) => state.data.isOpen);
  const dispatch = useDispatch();

  return (
    <div className={["popup-container", isOpen ? "active" : ""].join(" ")} onClick={() => dispatch(toggle())}>
      <div className="login-validation-wrap" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
