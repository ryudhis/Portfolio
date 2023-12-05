import React from "react";

const TabButton = (props) => {
  const buttonClasses = props.active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
    </button>
  );
};

export default TabButton;
