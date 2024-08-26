import React from "react";

const ProblemCard = ({ name, difficulty, url }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-sm">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Rating: {difficulty}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
          View Problem
        </a>
      </div>
    </div>
  );
};

export default ProblemCard;