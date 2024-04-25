import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import ClientDetails from "../_component/ClientDetails";

interface Props {
  params: { id: string };
}

const ClientDetailsPage = async ({ params }: Props) => {
  const client = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!client) return notFound();

  return (
    <div className="bg-white">
      <ClientDetails {...client} />
    </div>
  );
};

export default ClientDetailsPage;
