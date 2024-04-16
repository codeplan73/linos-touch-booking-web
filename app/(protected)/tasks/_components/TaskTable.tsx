import { db } from "@/lib/db";
import { Booking } from "@prisma/client";

const TaskTable = async () => {
  const newTask = await db.booking.findMany({
    where: {
      cleaning_status: "PENDING",
    },
  });

  return (
    <div>
      <h3>Task List</h3>

      {newTask.map((task) => (
        <p key={task.id}>{task.email}</p>
      ))}
    </div>
  );
};

export default TaskTable;
