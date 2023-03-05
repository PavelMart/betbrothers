import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/data/data.slice";

const RegisterBtn = () => {
  const { registerButton } = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  return (
    <button id="register" className="btn btn-red" onClick={() => dispatch(toggle())}>
      {registerButton}
    </button>
  );
};

export default RegisterBtn;
