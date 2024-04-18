import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f1",
      amount: 100,
      status: "pending",
      email: "qm@example.com",
    },
    {
      id: "728ed52f2",
      amount: 100,
      status: "pending",
      email: "bm@example.com",
    },
    {
      id: "728ed52f3",
      amount: 100,
      status: "pending",
      email: "rm@example.com",
    },
    {
      id: "728ed52f4",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f5",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f6",
      amount: 100,
      status: "pending",
      email: "zm@example.com",
    },
    {
      id: "728ed52f7",
      amount: 100,
      status: "pending",
      email: "bm@example.com",
    },
    {
      id: "728ed52f8",
      amount: 100,
      status: "pending",
      email: "jm@example.com",
    },
    {
      id: "728ed52f9",
      amount: 100,
      status: "pending",
      email: "dm@example.com",
    },
    {
      id: "728ed52f10",
      amount: 100,
      status: "pending",
      email: "vkl@example.com",
    },
    {
      id: "728ed52f11",
      amount: 100,
      status: "pending",
      email: "ghm@example.com",
    },
    {
      id: "728ed52f12",
      amount: 100,
      status: "pending",
      email: "lom@example.com",
    },
    {
      id: "728ed52f13",
      amount: 100,
      status: "pending",
      email: "icm@example.com",
    },
    {
      id: "728ed52f14",
      amount: 100,
      status: "pending",
      email: "kom@example.com",
    },
  ];
}

const PaymentPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentPage;
