import React, { useEffect } from "react";
import achievement from "../assets/achievement.png";
import background from "../assets/anotherBanga.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  // Create individual animation controls for each div
  const onScrollReveal = useAnimation();
  const bulletsReveal1 = useAnimation();
  const bulletsReveal2 = useAnimation();
  const bulletsReveal3 = useAnimation();
  const bulletsReveal4 = useAnimation();
  const bulletsReveal5 = useAnimation();
  const bulletsReveal6 = useAnimation();

  // useInView hook to detect when component is in view
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      // Start the general reveal animation
      onScrollReveal.start({
        opacity: [0, 1],
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Start individual bullet reveal animations with different delays
      bulletsReveal1.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 0.5 },
      });

      bulletsReveal2.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 1 },
      });

      bulletsReveal3.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 0.2 },
      });

      bulletsReveal4.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 0.4 },
      });

      bulletsReveal5.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 0.9 },
      });

      bulletsReveal6.start({
        x: ["-100vw", 0],
        opacity: [0, 1],
        transition: { duration: 0.6, ease: "easeIn", delay: 0.5 },
      });
    } else {
      // Reset all animations when out of view
      bulletsReveal1.stop();
      bulletsReveal2.stop();
      bulletsReveal3.stop();
      bulletsReveal4.stop();
      bulletsReveal5.stop();
      bulletsReveal6.stop();

      onScrollReveal.start({
        opacity: [1, 0],
        y: [0, 100],
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [
    inView,
    onScrollReveal,
    bulletsReveal1,
    bulletsReveal2,
    bulletsReveal3,
    bulletsReveal4,
    bulletsReveal5,
    bulletsReveal6,
  ]);

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#050505] text-white pt-10 pb-10">
      <motion.div
        animate={onScrollReveal}
        ref={ref}
        className="flex justify-center z-10 mb-20"
      >
        <h2 className="text-5xl font-bold">
          My <span className="text-green-400">Education</span>
        </h2>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        animate={onScrollReveal}
        ref={ref}
        className="grid grid-cols-[200px_440px_440px_440px_200px] grid-rows-2 gap-x-5 gap-y-5 z-10"
      >
        {/* Grid Item 1 */}
        <motion.div
          animate={bulletsReveal1} // Use individual animation controls
          className="col-start-2 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl hover:scale-95 hover:border-green-400 hover:border-opacity-100"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col justify-center items-center">
            <p className="text-green-400 font-bold text-lg">
              MERN Stack Web Dev
            </p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>

        {/* Grid Item 2 */}
        <motion.div
          animate={bulletsReveal2} // Use individual animation controls
          className="col-start-3 col-end-4 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col justify-center items-center">
            <p className="text-green-400 font-bold text-lg">
              Full Stack Web Dev
            </p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>

        {/* Grid Item 3 */}
        <motion.div
          animate={bulletsReveal3} // Use individual animation controls
          className="col-start-4 col-end-5 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col justify-center items-center">
            <p className="text-green-400 font-bold text-lg">
              Software Engineering
            </p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>

        {/* Grid Item 4 */}
        <motion.div
          animate={bulletsReveal4} // Use individual animation controls
          className="col-start-2 col-end-3 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col justify-center items-center">
            <p className="text-green-400 font-bold text-lg">Blockchain Dev</p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>

        {/* Grid Item 5 */}
        <motion.div
          animate={bulletsReveal5} // Use individual animation controls
          className="col-start-3 col-end-4 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col justify-center items-center">
            <p className="text-green-400 font-bold text-lg">Graphic Design</p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>

        {/* Grid Item 6 */}
        <motion.div
          animate={bulletsReveal6} // Use individual animation controls
          className="col-start-4 col-end-5 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl"
        >
          <div>
            <img src={achievement} alt="" />
          </div>
          <div className="ml-8 flex flex-col items-center">
            <p className="text-green-400 font-bold text-lg">
              Blockchain Development
            </p>
            <p>Rwanda Coding Academy</p>
            <p>2024 - 2025</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
