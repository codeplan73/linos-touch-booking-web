import { db } from "@/lib/db";
import EditForm from "../_component/EditForm";

interface Props {
  params: { id: number };
}

const page = async ({ params }: Props) => {
  const user = await db.user.findUnique({ where: { id: String(params.id) } });

  if (!user) {
    return { notFound: true };
  }

  return <EditForm user={user} />;
};

export const revalidate = 10;

export default page;
