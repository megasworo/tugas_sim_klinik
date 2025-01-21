import React from "react";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import Submit from "../../Components/Submit";
import logo from "/logo1.png"
import { useNavigate } from "react-router";

const Login = function () {
  const navi = useNavigate();
  return (
    <>
      <img src={logo} alt="Logo" />
      <Card title="Login">
        <Input label="Username" />
        <Input label="Password" type="password" />
        <Submit name="Login" onClick={() => navi("/dashboard")} />
      </Card>
    </>
  );
};

export default Login;
