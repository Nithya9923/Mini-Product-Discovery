import React from "react";
import featherIcon from "../assets/feather.svg";


export default function Question({ onSelect }) {
  const options = ["Grounding", "Softness", "Energy", "Freedom"];

  return (
    
    <div className="min-h-screen flex flex-col bg-green-50 items-center justify-center px-6 py-12 text-center">
        <img src={featherIcon} alt="Feather Icon" className="w-19 h-19 pb-6 md:absolute md:top-10 md:left-9" />
      <h1 className="text-2xl font-semibold mb-6 text-green-900">
        What does your body crave today?
      </h1>
      <div className="grid gap-4 w-full max-w-xs">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className="py-3 px-5 bg-green-100 hover:bg-green-200 text-green-900 rounded-full transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
