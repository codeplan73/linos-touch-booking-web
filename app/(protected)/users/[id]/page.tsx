import { db } from "@/lib/db";

interface Props {
  params: { id: number };
}

const page = async ({ params }: Props) => {
  const user = await db.user.findUnique({ where: { id: String(params.id) } });

  return (
    <div>
      <pre>{user?.email}</pre>
    </div>
  );
};

export default page;
