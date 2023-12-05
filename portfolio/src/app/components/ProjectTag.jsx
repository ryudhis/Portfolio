import React from "react";

const ProjectTag = (props) => {
  const buttonStyle = props.isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => props.onClick(props.tag)}
    >
      {props.tag}
    </button>
  );
};

export default ProjectTag;
