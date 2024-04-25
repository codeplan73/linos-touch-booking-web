import React from "react";
import ClientsTable from "./_component/clientsTable";
import Link from "next/link";

const ClientsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 overflow-x-auto">
        <div className="flex items-center justify-between my-4 p-2 rounded-sm">
          <h4 className="text-xl text-slate-400">Staff List</h4>
        </div>
        <ClientsTable />
      </div>
    </div>
  );
};

export const revalidate = 1;

export default ClientsPage;
