"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Booking } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Payment = Booking;

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "postcode",
    header: "Postal Code",
  },
  {
    accessorKey: "fullname",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "clean_type",
    header: "Task Type",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-uk", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "booking_date",
    header: "Date",
  },
  {
    accessorKey: "cleaning_status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("cleaning_status");
      let bgColor = "";

      switch (status) {
        case "NEW":
          bgColor = "bg-yellow-300 text-yellow-900";
          break;
        case "ONGOING":
          bgColor = "bg-purple-300 text-purple-900";
          break;
        case "COMPLETED":
          bgColor = "bg-green-300 text-green-900";
          break;
        default:
          bgColor = "bg-gray-500"; // Add a default color for unknown statuses
          break;
      }

      return (
        <div className={`px-2 py-1 rounded text-center ${bgColor}`}>
          {status as string}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/bookings/${payment.id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Delete Booking
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
