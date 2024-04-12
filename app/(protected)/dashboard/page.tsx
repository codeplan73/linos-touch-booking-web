import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <h4>Welcome To Admin Dashboard page</h4>
      {user?.name && <p>{user.role}</p>}

      {session?.user?.email}

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        autem eos minus ex rerum voluptates, consequatur accusantium esse
        corrupti dolor repellat eius pariatur. Quia voluptate in id dignissimos
        consequuntur rerum.
      </p>
    </div>
  );
};

export default DashboardPage;
