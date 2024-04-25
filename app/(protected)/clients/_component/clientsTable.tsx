import { columns } from "@/components/table/client-column";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";

const ClientsTable = async () => {
  const users = await db.user.findMany({
    where: { role: "CLIENT" },
  });
  return (
    <div className="w-full bg-white px-6 py-8">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export const revalidate = 10;

export default ClientsTable;
