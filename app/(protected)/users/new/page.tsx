import BreadCumNav from "@/components/BreadCumNav";
import React from "react";
import NewUserForm from "../_component/NewUserForm";

const page = () => {
  return (
    <div className="">
      <BreadCumNav
        dashboard="dashboard"
        currentPage="users"
        currentSection="Add New User"
      />
      <div>
        <NewUserForm />
      </div>
    </div>
  );
};

export default page;
