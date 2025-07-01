import React from "react";
import cloudrob from "../assets/images/cloudrob.jpg"; 
import bodysuit from "../assets/images/bodysuit.jpg"; 
import tank from "../assets/images/tank.jpg"; 
import short from "../assets/images/short.jpg"; 

const productData = {
  Grounding: {
    archetype: "The Rooted One",
    product: "Embrace Bodysuit",
    description: "A comforting layer that connects you to the earth.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    fabric: "TENCEL Soft",
    image: bodysuit,
  },
  Softness: {
    archetype: "The Gentle Spirit",
    product: "Cloud Robe",
    description: "A gentle, flowing piece that hugs like a whisper. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    fabric: "Brushed Modal",
    image: cloudrob, 
  },
  Energy: {
    archetype: "The Radiant Force",
    product: "Vital Tank",
    description: "Moves with your spark, supports your momentum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    fabric: "Cooling Mesh",
    image: tank,
  },
  Freedom: {
    archetype: "The Unbound",
    product: "Flow Shorts",
    description: "Light, freeing design that follows your rhythm. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    fabric: "Organic Cotton",
    image: short,
  },
};

const Product = ({ choice, onReset }) => {
  const selected = productData[choice];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col md:flex-row justify-center items-center px-6 py-8 text-center md:text-left md:gap-12">
      
      <img
        src={selected.image}
        alt={selected.product}
        className="w-64 h-98 object-cover rounded-xl shadow-md mb-6 md:mb-0"
      />

      
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-lg text-green-800 font-semibold mb-1 tracking-wide uppercase">
          {selected.archetype}
        </h2>
        <h1 className="text-2xl font-serif text-gray-800 mb-2">
          {selected.product}
        </h1>
        <p className="text-gray-600 italic mb-2 text-justify md:w-100">{selected.description}</p>
        <span className="inline-block bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full mb-6 mt-2">
          {selected.fabric}
        </span>

        <button
          onClick={onReset}
          className="mt-4 px-5 md:ml-70  md:mt-14 py-2 bg-green-900 text-white font-semibold  rounded-full hover:bg-green-200 hover:text-green-900 transition shadow-md"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Product;
