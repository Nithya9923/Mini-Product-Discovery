import React, { useState, useEffect } from "react";
import Question from "./Components/Question";
import Product from "./Components/Product";

export default function App() {
  const [selection, setSelection] = useState(null);
  const [welcomeBack, setWelcomeBack] = useState(false);



  useEffect(() => {
    const saved = localStorage.getItem("selection");
    if (saved) {
      setSelection(saved);
      setWelcomeBack(true);
    }
  }, []);

  
  useEffect(() => {
    if (selection) {
      localStorage.setItem("selection", selection);
    }
  }, [selection]);

  
  const handleReset = () => {
    setSelection(null);
    setWelcomeBack(false);
  };


  return (
    <div className="min-h-screen bg-[#fdfcfb] text-gray-800 font-sans">
      {!selection ? (
        <Question onSelect={setSelection} />
      ) : (

             <>
          {welcomeBack && (
            <div className="text-center text-pink-700 font-semibold bg-pink-50 text-xl pt-4 pb-4">
              Welcome back! Here's what you previously selected
            </div>
          )}
          <Product choice={selection} onReset={handleReset} />
        </>
      )}
    </div>
  );
}
