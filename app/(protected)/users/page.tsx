import React from "react";
import UsersTable from "./_component/UsersTable";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 overflow-x-auto">
        <h4 className="text-xl text-slate-400">Task List</h4>
        <UsersTable />
      </div>
    </div>
  );
};

export default page;
