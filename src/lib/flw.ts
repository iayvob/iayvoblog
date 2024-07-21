export const code1 = `try {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: Date.now() + plan + country,
        amount: 20,
        currency: "USD",
        redirect_url: "/successflw",
        payment_options: "card",
        enckey: encKey,
        customer: {
          email: email,
          name: name,
        },
        callback: function () {},
        onclose: function () {
          showToast("Payment canceled by user.");
        },
        customizations: {
          title: "Learnrithm",
          description: "pay for your plan of cost :",
          logo: "https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-2193968-1855546.png",
        },
      });
    };
  } catch (error) {
    console.error("Error setting up Flutterwave checkout:", error);
  }
}`

export const code2 = `let planId = flutterwavePlanIdYearly;
  let amount = amountInGBPYearly;
  if (plan === "Monthly Plan") {
    planId = flutterwavePlanIdMonthly;
    amount = amountInGBPMonthly;
  }

  try {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: Date.now() + plan + country,
        amount: amount,
        payment_plan: planId,
        currency: "GBP",
        redirect_url: "/successflw",
        payment_options: "card",
        enckey: encKey,
        customer: {
          email: email,
          name: name,
        },
        callback: function () {},
        onclose: function () {
          showToast("Payment canceled by user.");
        },
        customizations: {
          title: "Learnrithm",
          description: "pay for your plan of cost :",
          logo: "https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-2193968-1855546.png",
        },
      });
    };

    sessionStorage.setItem("method", "flutterwave");
    sessionStorage.setItem("plan", plan);
  } catch (error) {
    console.error("Error setting up Flutterwave checkout:", error);
    showToast("Unexpected error occurred. Please try again later.");
  }
}`

export const card = `card number: 5531886652142950 
CVV: 564 
PIN: 3310 
Exp: 09/32 
OPT: 12345`