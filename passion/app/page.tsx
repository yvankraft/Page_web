"use client";
import {
  motion,
  useTransform,
  useScroll,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const page = () => {
  const { scrollYProgress } = useScroll();
  // Quand scroll = 0 (haut), flou = 0px. Quand scroll = 0.5, flou = 10px.
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(10px)"],
  );
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div>
      <motion.div
        style={{ filter: blurValue, scale: scaleValue }}
        className="absolute top-0 z-[-1] left-0 w-full h-full object-cover"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 z-[-1] left-0 w-full h-full object-cover"
          style={{ imageRendering: "crisp-edges" }}
          src="/homepage.asset/bg2.mp4"
        ></video>
      </motion.div>
      <main>
        <motion.section
          style={{ opacity: opacityValue }}
          className="relative  z-10 bg-opacity-50 p-8"
        >
          <div className="h-[90vh] w-full flex items-center justify-center">
            {" "}
            <h1 className="text-[16vw]  font-bold font-Haettenschweilerfont-mono uppercase tracking-tighter mix-blend-difference text-white">
              PASSION
            </h1>
          </div>
        </motion.section>
        <section className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory">
          <div id="Professional" className="h-[100vh] w-[100vw] snap-start">
            <h2 className="text-4xl font-bold mb-4">Professional Rig</h2>
            <p className="text-lg text-gray-700">
              Explore the world of automotive excellence, where passion meets
              precision. From the roar of engines to the sleek curves of design,
              discover the art and science behind every vehicle. Join us on a
              journey through innovation, performance, and the relentless
              pursuit of automotive perfection.
            </p>
          </div>
          <div className="h-[100vh] w-[100vw] snap-start">Family Bond</div>
          <div className="h-[100vh] w-[100vw] snap-start">Wanderlust</div>
          <div className="h-[100vh] w-[100vw] snap-start">Motorsport</div>
          <div className="h-[100vh] w-[100vw] snap-start">Two Wheels</div>
          <div className="h-[100vh] w-[100vw] snap-start">About</div>
        </section>
      </main>
    </div>
  );
};

export default page;
