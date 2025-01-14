"use client";

import React from "react";
import { IOrder } from "@/types/order.types";

interface OrderPaymentInfoProps {
    order: IOrder;
    showStatus?: boolean;
}
const OrderPaymentInfo: React.FC<OrderPaymentInfoProps> = ({
    order,
    showStatus = true,
}) => {
    const { id, amount, currency, created, payment_method_types, status } =
        order?.paymentIntents;

    let formateTime;
    if (Math.ceil(Math.log(created + 1) / Math.LN10) >= 11) {
        formateTime = Math.floor(created / 1000);
    }
    return (
        <div className="px-5 pb-4">
            <p className="text-center text-gray-700">
                <span>ID: {id}</span>
                {" / "}
                <span>
                    Amount:{" "}
                    {(amount / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </span>
                {" / "}
                <span>Currency: {currency?.toUpperCase()}</span>
                {" / "}
                <span>Method: {payment_method_types?.[0]}</span>
                {" / "}
                <span>Payment: {status?.toUpperCase()}</span>
                {" / "}
                <span>
                    Ordered On:{" "}
                    {formateTime ? (
                        <>{new Date(formateTime * 1000).toLocaleString()}</>
                    ) : (
                        <>{new Date(created * 1000).toLocaleString()}</>
                    )}
                </span>

                {showStatus && (
                    <>
                        {" / "}
                        <span className="badge bg-success text-white capitalize">
                            STATUS: {order?.trackingInfo?.title}
                        </span>
                    </>
                )}
            </p>
        </div>
    );
};

export default OrderPaymentInfo;
