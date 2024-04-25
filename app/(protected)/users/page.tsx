import React from "react";
import UsersTable from "./_component/UsersTable";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 overflow-x-auto">
        <div className="flex items-center justify-between my-4 p-2 rounded-sm">
          <h4 className="text-xl text-slate-400">Staff List</h4>
          <Link
            href="/users/new"
            className="bg-warningColor text-white p-2 rounded-lg shadow-xl hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            Add New Staff
          </Link>
        </div>
        <UsersTable />
      </div>
    </div>
  );
};

export default page;
