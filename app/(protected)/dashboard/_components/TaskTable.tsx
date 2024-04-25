import React from "react";
import { newTaskColumns } from "@/components/table/new-task-column";
import { onGoingColumns } from "@/components/table/ongoing-task-column";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";

const TaskTable = async () => {
  const newTask = await db.booking.findMany({
    where: {
      cleaning_status: "PENDING",
    },
  });

  const ongoingCompletedTask = await db.booking.findMany({
    where: {
      OR: [{ cleaning_status: "ONGOING" }, { cleaning_status: "COMPLETED" }],
    },
  });

  const completedTasks = await db.booking.findMany({
    where: {
      cleaning_status: "COMPLETED",
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white p-4">
        <DataTable columns={newTaskColumns} data={newTask} />
      </div>
      <div className="bg-white p-4">
        <DataTable columns={onGoingColumns} data={ongoingCompletedTask} />
      </div>
    </div>
  );
};

export default TaskTable;
