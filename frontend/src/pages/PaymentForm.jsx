
import React, { useState } from "react";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    amount: "",
    productinfo: "Test Product",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://humancareairambulance.com/backend/payu_checkout.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!data || !data.action || !data.params) {
        alert("Something went wrong while creating the payment.");
        return;
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.action;

      for (const key in data.params) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data.params[key];
        form.appendChild(input);
      }

      // ✅ Redirect to your React success page
      const surl = document.createElement("input");
      surl.type = "hidden";
      surl.name = "surl";
      surl.value = "https://humancareairambulance.com/backend/payu_success.php"; // success page in React
      form.appendChild(surl);

      // ❌ Redirect to your React failure page
      const furl = document.createElement("input");
      furl.type = "hidden";
      furl.name = "furl";
      furl.value = "https://humancareairambulance.com/backend/payu_failure.php"; // failure page in React
      form.appendChild(furl);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <>
    <div style={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <h1 className="text-2xl font-bold text-center my-4">Payment Form</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-sm mx-auto"
      >
        <input
          name="firstname"
          placeholder="Name"
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Pay Now
        </button>
      </form>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// export default function PaymentForm() {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     email: "",
//     phone: "",
//     amount: "",
//     productinfo: "Test Product",
//     address: "",       // added
//     city: "",          // added
//     state: "",         // added
//     postalcode: "",    // added
//     country: "",       // added
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "https://humancareairambulance.com/backend/payu_checkout.php",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (!data || !data.action || !data.params) {
//         alert("Something went wrong while creating the payment.");
//         return;
//       }

//       const form = document.createElement("form");
//       form.method = "POST";
//       form.action = data.action;

//       for (const key in data.params) {
//         const input = document.createElement("input");
//         input.type = "hidden";
//         input.name = key;
//         input.value = data.params[key];
//         form.appendChild(input);
//       }

//       const surl = document.createElement("input");
//       surl.type = "hidden";
//       surl.name = "surl";
//       surl.value = "https://humancareairambulance.com/backend/payu_success.php";
//       form.appendChild(surl);

//       const furl = document.createElement("input");
//       furl.type = "hidden";
//       furl.name = "furl";
//       furl.value = "https://humancareairambulance.com/backend/payu_failure.php";
//       form.appendChild(furl);

//       document.body.appendChild(form);
//       form.submit();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Failed to initiate payment. Please try again.");
//     }
//   };

//   return (
//     <><div style={{ paddingTop: "75px", paddingBottom: "20px" }}>


//       <h1 className="text-2xl font-bold text-center py-4">Payment Form</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-3 max-w-sm mx-auto"
//       >
//         <input
//           name="firstname"
//           placeholder="Name"
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           name="amount"
//           placeholder="Amount"
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         {/* New fields added */}
//         <input
//           name="address"
//           placeholder="Address"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="city"
//           placeholder="City"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="state"
//           placeholder="State"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="postalcode"
//           placeholder="Postal Code"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="country"
//           placeholder="Country"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Pay Now
//         </button>
//       </form>
//           </div>
//     </>
//   );
// }
