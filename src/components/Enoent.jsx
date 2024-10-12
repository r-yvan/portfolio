// import React, { useState } from "react";
// import "../styles/index.css";

// function ProductValidation() {
//   // Step 1: Create state variables for the input fields and error messages
//   const [productName, setProductName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [quantityError, setQuantityError] = useState("");

//   // Step 2: Create a function to validate product name
//   const validateProductName = () => {
//     if (productName.trim() === "") {
//       setNameError("Product name is required.");
//     } else {
//       setNameError("");
//     }
//   };

//   // Step 3: Create a function to validate quantity
//   const validateQuantity = () => {
//     if (quantity.trim() === "") {
//       setQuantityError("Quantity is required.");
//     } else {
//       setQuantityError("");
//     }
//   };

//   // Step 4: Create a function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent form submission

//     // Validate both fields on submit
//     validateProductName();
//     validateQuantity();

//     // Additional logic for form submission can go here
//     if (nameError === "" && quantityError === "") {
//       alert("Form submitted successfully");
//     }
//   };

//   return (
//     <div>
//       <section>
//         <form onSubmit={handleSubmit}>
//           {/* Product Name Input Field */}
//           <label>
//             <input
//               type="text"
//               value={productName}
//               onInput={(e) => setProductName(e.target.value)} // Update state on input
//               onBlur={validateProductName} // Validate on blur (when input loses focus)
//             />
//             {/* Display error message for product name */}
//             <p>
//               {nameError}
//             </p>
//           </label>

//           {/* Quantity Input Field */}
//           <label>
//             <input
//               type="number"
//               value={quantity}
//               onInput={(e) => setQuantity(e.target.value)} // Update state on input
//               onBlur={validateQuantity} // Validate on blur (when input loses focus)
//               placeholder="Quantity"
//             />
//             {/* Display error message for quantity */}
//             <p>
//               {quantityError}
//             </p>
//           </label>

//           {/* Submit Button */}
//           <button type="submit">
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ProductValidation;
