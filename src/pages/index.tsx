import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import GooglePayButton from "@google-pay/button-react";
import { lotteryArray } from "@/components/dummyData/array";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {lotteryArray.map((item: any) => {
          return (
            <>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginTop: "15px",
                }}
              >
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">lottery amount:{item.amount}</p>
                  <p className="card-text">Members:{item.members}</p>
                  <p className="card-text">first Price:{item.firstprice}</p>

                  <p className="card-text" style={{ color: "blue" }}>
                    phone pe/Gpay:-{item.mobileno}
                  </p>
                  <p className="card-text" style={{ color: "coral" }}>
                    Entry fee:{item.entryfee}
                  </p>

                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: [
                  "AMEX",
                  "DISCOVER",
                  "JCB",
                  "MASTERCARD",
                  "VISA",
                ],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGetMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "123456796533",
            merchantName: "Example Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalpriceLabel: "Total",

            totalPrice: "10",

            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(PaymentRequest) => {
          console.log(PaymentRequest);
        }}
        onPaymentAuthorized={(paymentData: any) => {
          console.log(paymentData);
          return { transactionState: "SUCCESS" };
        }}
        // existingPaymentMethodRequired='false'
        buttonColor="Black"
        buttonType="buy"
      ></GooglePayButton> */}
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorised Success", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        onPaymentDataChanged={(paymentData) => {
          console.log("On Payment Data Changed", paymentData);
          return {};
        }}
        existingPaymentMethodRequired={false}
        buttonColor="black"
        buttonType="buy"
      />
    </main>
  );
}
