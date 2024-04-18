import React from "react";
import DashboardCard from "../_components/DashboardCard";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import TasksTab from "./_components/TasksTab";
import CardWrapper from "@/components/card-wrapper";

const TasksPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <CardWrapper>
        <DashboardCard
          icon={
            <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
          }
          amount={1050}
          heading="Total Task"
          inconChart={<TiArrowSortedUp className="text-green-500" />}
          date="April, 5th 2024"
          chart="5"
        />

        <DashboardCard
          icon={
            <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
          }
          amount={450}
          heading="Ongoing Task"
          inconChart={<TiArrowSortedDown className="text-red-500" />}
          date="April, 5th 2024"
          chart="8"
        />

        <DashboardCard
          icon={
            <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
          }
          amount={250}
          heading="Completed Task"
          inconChart={<TiArrowSortedUp className="text-green-500" />}
          date="April, 5th 2024"
          chart="12"
        />
      </CardWrapper>

      <div className="flex flex-col gap-4 overflow-x-auto">
        <h4 className="text-xl text-slate-400">Task List</h4>
        <TasksTab />
      </div>
    </div>
  );
};

export default TasksPage;
