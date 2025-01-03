import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const Work = () => {
  const TiltCard = () => {
    // Define motion values for tilt
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // Transform tilt values into style
    const tiltStyle = useTransform(
      [rotateX, rotateY],
      ([x, y]) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`
    );

    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left; // Cursor position within the element
      const y = e.clientY - top;

      // Calculate rotation values based on cursor position
      const rotateYValue = ((x / width) * 30 - 15).toFixed(2); // Rotate Y (-15 to 15 degrees)
      const rotateXValue = ((y / height) * -30 + 15).toFixed(2); // Rotate X (-15 to 15 degrees)

      rotateX.set(rotateXValue);
      rotateY.set(rotateYValue);
    };

    const handleMouseLeave = () => {
      // Reset tilt on mouse leave
      rotateX.set(0);
      rotateY.set(0);
    };

    return (
      <motion.div
  className="shadow-lg cursor-pointer"
  style={{
    width: 300,
    height: 200,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transformOrigin: "center",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transform: tiltStyle, // Apply the dynamic tilt style
    padding: "4px", // Padding to create space for the border
    background: "linear-gradient(90deg, #069A87, #BF61FF)", // Gradient for the outer border
  }}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "inherit", // Inherit the parent borderRadius
      background: "rgba(255, 255, 255, 0.1)", // Blurry transparent background
      backdropFilter: "blur(10px)", // Add blur effect for glossy look
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="font-black text-black">this is card</div>
  </div>
</motion.div>


    );
  };

  return (
    <div className="inset-0 bg-black">
      <div className="h-full md:h-screen w-screen text-white inset-0 bg-[radial-gradient(circle_at_top,rgba(50,50,50,0.8)_0%,transparent_100%)] flex flex-col">
        {/* Title Section */}
        <div className="font-sans flex flex-col text-lg font-[900] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 p-16">
          <span className="block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0">
            MY
          </span>
          <span className="block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0">
            &nbsp;&nbsp;&nbsp;PROJECTS
          </span>
        </div>

        {/* Projects Section */}
        <div className="flex flex-wrap justify-center gap-4 p-16 overflow-scroll">
          {/* Replace Tilt with Framer Motion */}
          <TiltCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
