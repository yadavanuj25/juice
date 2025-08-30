import React from "react";
const Payment = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_R7BTgVB1DjCmpE",
      amount: 50000,
      currency: "INR",
      name: "EaseeSqueezy",
      description: "Test Payment (UI only, no real transaction)",
      handler: function (response) {
        alert("Simulated Response: " + JSON.stringify(response));
      },
      prefill: {
        name: "Ecode Dash",
        email: "ecodedash@gmail.com",
        contact: "9999999999",
      },
      theme: {
        // color: "green",
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex flex-col items-center p-6">
      <button
        onClick={displayRazorpay}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
