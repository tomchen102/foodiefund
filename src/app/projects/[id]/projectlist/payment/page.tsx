import CheckoutList from "./_components/CheckoutList";
import PaymentForm from "./_components/PaymentForm";

const Payment = async () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="mb-8 pr-10 lg:col-span-9">
        <PaymentForm />
      </div>
      <div className="lg:col-span-3">
        <CheckoutList />
      </div>
    </div>
  );
};

export default Payment;
