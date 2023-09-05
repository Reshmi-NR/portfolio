import React from "react";

const MoonIconButton = () => {

    return (
        <div>
            <button className=" block container absolute right-10 top-3 mr-6  box-border h-7 w-8 px-2  leading-9 text-xl rounded ">
            <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      stroke="currentColor" 
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
      />
    </svg>
            </button>
        </div>
    );
}

export default MoonIconButton;