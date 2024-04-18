import { db } from "@/lib/db";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export enum CleaningStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

const TaskTable = async ({ status }: { status: CleaningStatus }) => {
  const tasks = await db.booking.findMany({
    where: {
      cleaning_status: status,
    },
  });

  const getStatusClass = (status: CleaningStatus) => {
    switch (status) {
      case CleaningStatus.PENDING:
        return "bg-blue-500 bg-opacity-10 text-blue-500 p-2 rounded-md";
      case CleaningStatus.COMPLETED:
        return "text-green-500 bg-green-500 bg-opacity-10 p-2 rounded-md";
      case CleaningStatus.CANCELED:
        return "text-yellow-500 bg-yellow-500 bg-opacity-10 p-2 rounded-md";
      default:
        return "";
    }
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>CleanType</TableHead>
          <TableHead>Hours</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>PaymentStatus</TableHead>
          <TableHead>Cleaning Status</TableHead>
          <TableHead>Assign Status</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.fullname}</TableCell>
            <TableCell>{task.email}</TableCell>
            <TableCell>{task.clean_type}</TableCell>
            <TableCell>{task.hours}</TableCell>
            <TableCell>{task.amount}</TableCell>
            <TableCell>{task.payment_status}</TableCell>
            <TableCell>
              <span
                className={getStatusClass(
                  task.cleaning_status as CleaningStatus
                )}
              >
                {task.cleaning_status}
              </span>
            </TableCell>
            <TableCell>{task.assigned_status}</TableCell>
            <TableCell>{task.assignedToUserId}</TableCell>
            <TableCell>delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
