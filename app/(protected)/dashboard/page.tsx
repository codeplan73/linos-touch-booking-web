import { auth } from "@/auth";
import DashboardCard from "./_components/DashboardCard";
import TaskTable from "./_components/TaskTable";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-8">
      <DashboardCard />

      <TaskTable />
    </div>
  );
};

export default DashboardPage;
