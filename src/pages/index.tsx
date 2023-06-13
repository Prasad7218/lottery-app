import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import GooglePayButton from "@google-pay/button-react";
import { lotteryArray } from "@/components/dummyData/array";
import laundry1 from "@/assets/images/laundry1.jpg";
import laundry2 from "@/assets/images/laundry2.jpg";
import laundry3 from "@/assets/images/laundry3.jpeg";

export default function Home() {
  const imageSource1 = laundry1.src;
  const imageSource2 = laundry2.src;
  const imageSource3 = laundry3.src;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div>
        <div
          id="carouselExampleCaptions"
          style={{ height: "400px" }}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imageSource1}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imageSource2}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imageSource3}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Sign Up As A Customer
              </button>
              <button type="button" className="btn btn-primary">
                Sign Up As A Service Provider
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-around",
        //   flexWrap: "wrap",
        //   padding: "20px",
        // }}
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
      /> */}
    </main>
  );
}
