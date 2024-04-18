import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "@/components/table/task-column";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";

const TasksTab = async () => {
  const pendingTasks = await db.booking.findMany({
    where: {
      cleaning_status: "PENDING",
    },
  });

  const ongoingTasks = await db.booking.findMany({
    where: {
      cleaning_status: "ONGOING",
    },
  });

  const completedTasks = await db.booking.findMany({
    where: {
      cleaning_status: "COMPLETED",
    },
  });

  const canceledTasks = await db.booking.findMany({
    where: {
      cleaning_status: "CANCELED",
    },
  });

  return (
    <Tabs defaultValue="pending" className="w-full bg-white px-6 pb-8">
      <TabsList>
        <TabsTrigger value="pending">Pending Task</TabsTrigger>
        {/* <TabsTrigger value="ongoingTask">Ongoing Task</TabsTrigger> */}
        <TabsTrigger value="canceledTask">Canceled Task</TabsTrigger>
        <TabsTrigger value="completedTask">Completed Task</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        <DataTable columns={columns} data={pendingTasks} />
      </TabsContent>
      {/* <TabsContent value="ongoingTask">
        <DataTable
          columns={columns}
          data={tasks}
          status={CleaningStatus.PENDING}
        />
      </TabsContent> */}
      <TabsContent value="canceledTask">
        <DataTable columns={columns} data={canceledTasks} />
      </TabsContent>

      <TabsContent value="completedTask">
        <DataTable columns={columns} data={completedTasks} />
      </TabsContent>
    </Tabs>
  );
};

export default TasksTab;
