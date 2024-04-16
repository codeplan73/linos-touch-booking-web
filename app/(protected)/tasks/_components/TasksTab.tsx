import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskTable from "./TaskTable";

const TasksTab = () => {
  return (
    <Tabs defaultValue="newTask" className="w-full bg-white px-6 pb-8">
      <TabsList>
        <TabsTrigger value="newTask">New Task</TabsTrigger>
        <TabsTrigger value="ongoingTask">Ongoing Task</TabsTrigger>
        <TabsTrigger value="completedTask">Completed Task</TabsTrigger>
      </TabsList>
      <TabsContent value="newTask">
        New Task shows here
        <TaskTable />
      </TabsContent>
      <TabsContent value="ongoingTask">All Ongoing Task</TabsContent>
      <TabsContent value="completedTask">All Completed Task</TabsContent>
    </Tabs>
  );
};

export default TasksTab;
