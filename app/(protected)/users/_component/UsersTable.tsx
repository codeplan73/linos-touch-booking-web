import { columns } from "@/components/table/user-column";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";

const TaskTable = async () => {
  const users = await db.user.findMany({});
  return (
    <div className="w-full bg-white px-6 pb-8">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default TaskTable;
