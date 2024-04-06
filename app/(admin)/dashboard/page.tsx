import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <h4>Welcome To Admin Dashboard page</h4>
      {user?.name && <p>{user?.name}</p>}
    </div>
  );
};

export default DashboardPage;
