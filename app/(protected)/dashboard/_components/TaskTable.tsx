import React from "react";
import { newTaskColumns } from "@/components/table/new-task-column";
import { onGoingColumns } from "@/components/table/ongoing-task-column";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";
import Link from "next/link";

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
      <div className="bg-white p-4 flex flex-col gap-8 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-400 ">New Task</h2>
          <Link
            href="/bookings"
            className="border px-2 py-1 rounded-md text-slate-600"
          >
            View all
          </Link>
        </div>
        <DataTable columns={newTaskColumns} data={newTask} />
      </div>
      <div className="p-4 flex flex-col gap-8 border-2 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-400">Ongoing Task</h2>
          <Link
            href="/bookings"
            className="border px-2 py-1 rounded-md text-slate-600"
          >
            View all
          </Link>
        </div>
        <DataTable columns={onGoingColumns} data={ongoingCompletedTask} />
      </div>
    </div>
  );
};

export default TaskTable;
