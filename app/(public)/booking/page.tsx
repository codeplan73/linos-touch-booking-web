import PageBanner from "@/components/PageBanner";
import Form from "@/components/booking/Form";
import Summary from "@/components/booking/Summary";

const BookingPage = () => {
  return (
    <section>
      <PageBanner page="Booking Aplication" link="booking" />
      <div className="relative container flex flex-col md:flex-row items-start justify-start gap-10 py-8 md:px-24">
        <Form />
      </div>
    </section>
  );
};

export default BookingPage;
