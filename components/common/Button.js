import React from "react";

export const ButtonSolid = () => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
    >
      Basic
    </button>
  );
};

export const ButtonBorder = () => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
    >
      Border
    </button>
  );
};

export const ButtonRounded = () => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
    >
      Rounded
    </button>
  );
};

export const ButtonWithBanner = () => {
    return (
        <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900">With banner
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">New</span>
    </button>
    );
  };