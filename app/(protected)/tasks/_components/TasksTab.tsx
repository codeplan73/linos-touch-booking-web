import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskTable, { CleaningStatus } from "./TaskTable";

const TasksTab = () => {
  return (
    <Tabs defaultValue="pending" className="w-full bg-white px-6 pb-8">
      <TabsList>
        <TabsTrigger value="pending">Pending Task</TabsTrigger>
        <TabsTrigger value="ongoingTask">Ongoing Task</TabsTrigger>
        <TabsTrigger value="canceledTask">Canceled Task</TabsTrigger>
        <TabsTrigger value="completedTask">Completed Task</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        <TaskTable status={CleaningStatus.PENDING} />
      </TabsContent>
      <TabsContent value="ongoingTask">
        <TaskTable status={CleaningStatus.PENDING} />
      </TabsContent>
      <TabsContent value="canceledTask">
        <TaskTable status={CleaningStatus.CANCELED} />
      </TabsContent>

      <TabsContent value="completedTask">
        <TaskTable status={CleaningStatus.COMPLETED} />
      </TabsContent>
    </Tabs>
  );
};

export default TasksTab;
