"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Booking } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { z } from "zod";
import Link from "next/link";

type Payment = Booking;
// type Payment = Booking & {
//   assigned_status: "ASSIGNED" | "UNASSIGNED" | string; // Add other possible values if they exist
// };
// type Payment = Booking & {
//   assigned_status: "ASSIGNED" | "UNASSIGNED" | string; // Add other possible values if they exist
// };

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullname",
    header: "FullName",
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
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "clean_type",
    header: "CleanType",
  },
  {
    accessorKey: "hours",
    header: "Hours",
  },
  {
    accessorKey: "cleaning_status",
    header: "CleanStatus",
    cell: ({ row }) => {
      const status = row.getValue("cleaning_status");
      let bgColor = "";

      switch (status) {
        case "PENDING":
          bgColor = "bg-red-700";
          break;
        case "ONGOING":
          bgColor = "bg-yellow-500";
          break;
        case "COMPLETED":
          bgColor = "bg-green-700";
          break;
        default:
          bgColor = "bg-gray-500"; // Add a default color for unknown statuses
          break;
      }

      return (
        <div className={`px-2 py-1 rounded text-white text-center ${bgColor}`}>
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "assigned_status",
    header: "AssignedStatus",
    cell: ({ row }) => {
      const status = row.getValue("assigned_status");
      let bgColor = "";

      switch (status) {
        case "ASSIGNED":
          bgColor = "bg-green-700 text-white text-center";
          break;
        case "UNASSIGNED":
          bgColor = "bg-yellow-500";
          break;
        default:
          bgColor = "bg-gray-500"; // Add a default color for unknown statuses
          break;
      }

      return (
        <div className={`px-2 py-1 rounded ${bgColor}`}>{status as string}</div>
      );
    },
  },
  {
    accessorKey: "assigneeName",
    header: "Assignee",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
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
