"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "@/components/spinner";

const DeleteAction = ({ bookingId }: { bookingId: number }) => {
  const router = useRouter();
  const [pending, setPending] = React.useState(false);

  const deleteBooking = async () => {
    try {
      setPending(true);
      // Assuming you have an API endpoint for deleting a booking
      const response = await axios.delete(`/api/bookings/${bookingId}`);

      console.log(response.data);

      if (response.data || response.status == 200) {
        toast.success(response.data.message);
        router.refresh();
        router.push("/bookings");
      }
      setPending(false);
      // Handle response as needed
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete Client Booking</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure of deleting this booking?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={() => deleteBooking()} disabled={pending}>
            <span>Continue</span>
            {pending && <Spinner />}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAction;
