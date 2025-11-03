// import React from "react";

// const ProductFilter = ({ categories = [], selected, onChange }) => (
//   <div className="flex flex-wrap gap-3 mb-6">
//     <button
//       onClick={() => onChange("all")}
//       className={`px-4 py-2 rounded-full ${
//         selected === "all" ? "bg-black text-white" : "bg-gray-200 text-gray-800"
//       }`}
//     >
//       All
//     </button>
//     {categories.map((category) => (
//       <button
//         key={category}
//         onClick={() => onChange(category)}
//         className={`px-4 py-2 rounded-full ${
//           selected === category
//             ? "bg-black text-white"
//             : "bg-gray-200 text-gray-800"
//         }`}
//       >
//         {category}
//       </button>
//     ))}
//   </div>
// );

// export default ProductFilter;
