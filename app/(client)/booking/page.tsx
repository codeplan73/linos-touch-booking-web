import PageBanner from "@/app/components/PageBanner";
import Form from "./_components/Form";
import Summary from "./_components/Summary";

const page = () => {
  return (
    <section>
      <PageBanner page="Booking Aplication" link="booking" />
      <div className="relative container flex flex-col md:flex-row items-start justify-start gap-10 md:gap-20 py-24 md:px-24">
        <Form />
        <Summary />
      </div>
    </section>
  );
};

export default page;
