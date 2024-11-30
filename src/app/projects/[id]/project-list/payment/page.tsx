import AnimatedContainer from "@/components/AnimatedContainer";
import CheckoutList from "./_components/CheckoutList";
import PaymentForm from "./_components/PaymentForm";

const Payment = async () => {
  return (
    <AnimatedContainer>
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="order-1 md:order-2 lg:col-span-3">
          <CheckoutList />
        </div>
        <div className="order-2 mb-8 md:order-1 md:pr-0 lg:col-span-9 lg:pr-10">
          <PaymentForm />
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Payment;
