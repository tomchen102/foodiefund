export interface OrderProps {
  id: string;
  order_no: string;
  order_date: string;
  discount: number;
  subtotal: number;
  shipping_fee: number;
  total_amount: number;
  currency: "NT$";
  payment_method: "credit_card";
  status: "resolve";
  customer: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface OrderShippingInfoProps extends OrderProps {
  order_shippingInfo: {
    contact_person: string;
    address: string;
    phone: string;
    postal_code: string;
    fax?: string;
    tax_id?: string;
    remark?: string;
  };
}

export interface OrderProductsProps {
  product_id: string;
  title: string;
  content: string;
  quantity: number;
  price: number;
  image: string;
  subtotal: number;
}

export interface OrderPaymentSuccessfulProps {
  order: OrderShippingInfoProps;
  order_products: OrderProductsProps[];
}
