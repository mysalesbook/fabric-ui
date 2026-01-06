// src/components/Button.tsx
import React from "react";
function Button({ variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded font-medium";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200",
    danger: "bg-red-600 text-white"
  };
  return /* @__PURE__ */ React.createElement("button", { className: `${base} ${variants[variant]}`, ...props });
}
export {
  Button
};
