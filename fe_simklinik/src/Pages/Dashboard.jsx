import React from "react";
import { Link } from "react-router";

const Dashboard = function () {
  return (
    <>
      <Link to="/">Kembali</Link>
      <h1 className="bg-slate-500">Dashboard</h1>
    </>
  );
};

export default Dashboard;
