import React, { useState } from "react";

const FormGroup = ({ label, type = "text", children }) => {
  const [value, setValue] = useState("");

  return (
    <div className="mb-3">
      <label for={label} className="inline-block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={label}
        class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {children}
    </div>
  );
};

export default FormGroup;
