import CardWrapper from "@/components/card-wrapper";
import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Card from "../../_components/Card";
import { db } from "@/lib/db";

const CardTask = async () => {
  const allTasks = await db.booking.findMany({});
  const ongoingTask = await db.booking.findMany({
    where: { cleaning_status: "ONGOING" },
  });
  const completedTask = await db.booking.findMany({
    where: { cleaning_status: "COMPLETED" },
  });

  return (
    <CardWrapper>
      <Card
        icon={
          <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={allTasks.length.toString()}
        heading="Total Task"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="5"
      />

      <Card
        icon={
          <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={ongoingTask.length.toString()}
        heading="Ongoing Task"
        inconChart={<TiArrowSortedDown className="text-red-500" />}
        date="April, 5th 2024"
        chart="8"
      />

      <Card
        icon={
          <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={completedTask.length.toString()}
        heading="Completed Task"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="12"
      />
    </CardWrapper>
  );
};

export default CardTask;
