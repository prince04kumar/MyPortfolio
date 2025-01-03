import React from "react";
import Cards from "./Cards";
import Form from "./Form";

const Bubbles = () => {
  return (
    <div className="relative w-screen h-full md:h-screen bg-gradient-to-b from-gray-800 to-black overflow-hidden flex flex-col items-center gap-4 justify-center">
      {/* Bubble 1 */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-2xl opacity-80 blur-md" />

      {/* Bubble 2 */}
      <div className="absolute bottom-1/3 right-1/3 w-[200px] h-[200px] bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-2xl opacity-80 blur-md" />

      {/* Bubble 3 (optional for variety) */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-2xl opacity-70 blur-md" />

      {/* Adjust layout to prevent overlapping */}
      <div className="flex flex-col md:flex-row md:justify-around h-full w-full gap-36 items-center p-8 pb-10">
        <div className="mb-40 mt-20"> <Cards /></div>
        <div className="m-4 md:m-0 rounded-lg"> <Form /></div>
      </div>
    </div>
  );
};

export default Bubbles;
