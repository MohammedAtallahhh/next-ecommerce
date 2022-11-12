import React from "react";

const FormGroup = (props) => {
  const { name, label, type = "text", value, onChange, children } = props;
  return (
    <div className="mb-3">
      <label htmlFor={label} className="inline-block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={label}
        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        value={value}
        onChange={onChange}
      />

      {children}
    </div>
  );
};

export default FormGroup;
