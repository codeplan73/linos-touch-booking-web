import React from "react";
import TasksTab from "./_components/TasksTab";
import CardTask from "./_components/CardTask";

const TasksPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <CardTask />

      <div className="flex flex-col gap-4 overflow-x-auto">
        <h4 className="text-xl text-slate-400">Task List</h4>
        <TasksTab />
      </div>
    </div>
  );
};

export default TasksPage;
