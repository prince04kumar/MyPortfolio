import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-24 ">
      <section className="text-4xl md:text-8xl text-white z-10 relative bottom-8 underline md:bottom-20 font1 font2">Contact Us</section>
      <div className="container flex justify-center">
      {/* Card 1 */}
      <div className="absolute w-[250px] md:w-[400px] h-[250px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl border border-gray-700 shadow-lg transform rotate-[-8deg] translate-x-[-30px]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">⛔</span>
            </div>
            <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✈️</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-semibold mb-4">+91 7307567443</h1>
          <div className="flex justify-between text-gray-300 text-sm">
            <span>
              <strong>Card Holder</strong> <br />
              PRINCE KUMAR
            </span>
            <span>
              <strong>Expires</strong> <br />
              10/21
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute md:w-[400px] w-[250px] h-[250px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl border border-gray-700 shadow-lg transform rotate-[8deg] translate-x-[30px]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">⛔</span>
            </div>
            <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✈️</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-semibold mb-4">+91 7307567443</h1>
          <div className="flex justify-between text-gray-300 text-sm">
            <span>
              <strong>Card Holder</strong> <br />
              PRINCE KUMAR
            </span>
            <span>
              <strong>Expires</strong> <br />
              10/21
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
