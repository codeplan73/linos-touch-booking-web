import CardWrapper from "@/components/card-wrapper";
import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BiTask } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { PiUsersFourFill } from "react-icons/pi";
import Card from "@/app/(protected)/_components/Card";
import { db } from "@/lib/db";

const DashboardCard = async () => {
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
          <FaChartLine className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={allTasks.length}
        heading="Total Revenue"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="5"
      />

      <Card
        icon={
          <IoBriefcaseOutline className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={ongoingTask.length}
        heading="Total Task"
        inconChart={<TiArrowSortedDown className="text-red-500" />}
        date="April, 5th 2024"
        chart="8"
      />

      <Card
        icon={
          <BiTask className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={completedTask.length}
        heading="Ongoing Task"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="12"
      />
      <Card
        icon={
          <GrTask className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={completedTask.length}
        heading="Completed Task"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="12"
      />
      <Card
        icon={
          <FaUsersLine className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={completedTask.length}
        heading="Total Staff"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="12"
      />
      <Card
        icon={
          <PiUsersFourFill className="bg-purple-100 text-4xl text-purple-950 p-2 rounded-xl" />
        }
        amount={completedTask.length}
        heading="Total Client"
        inconChart={<TiArrowSortedUp className="text-green-500" />}
        date="April, 5th 2024"
        chart="12"
      />
    </CardWrapper>
  );
};

export default DashboardCard;
