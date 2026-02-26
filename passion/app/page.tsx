"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import SeeMoreButton from "./components/SeeMoreButton";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // Effets de flou et d'échelle uniquement pour la première section
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(10px)"],
  );
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white">
      {/* SECTION 1 : Avec Vidéo en Background */}
      <section
        ref={containerRef}
        className="relative h-screen w-full flex items-center justify-center snap-start overflow-hidden"
      >
        {/* Vidéo limitée à cette section */}
        <motion.div
          style={{ filter: blurValue, scale: scaleValue }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="/homepage.asset/bg2.mp4"
          />
        </motion.div>

        {/* Contenu de la section 1 */}
        <h1 className="relative z-10 text-[18vw] font-bold uppercase tracking-tighter mix-blend-difference">
          PASSION
        </h1>
        <p className="tracking-tighter">
          BEYOND UTILITY.
          <br /> A WAY OF LIFE.
        </p>
      </section>
      {/* SECTION 2 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/profi.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6 drop-shadow-lg">
            Professional Rig
          </h2>
          <p className="max-w-2xl text-xl text-white drop-shadow-lg ">
            When we think of cars and work, construction sites immediately come
            to mind. But is that the whole story? Explore the full story.
          </p>
          <SeeMoreButton href="/profi" />
        </motion.div>
      </section>
      {/* SECTION 3 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/FamilyBond.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Family Bond</h2>
          <p className="max-w-2xl text-xl text-white">
            In 2026, it’s no exaggeration to say the car has become a family
            member—one we simply can’t live without. Rediscover the connection.
          </p>
          <SeeMoreButton href="/family" />
        </motion.div>
      </section>
      {/* SECTION 4 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/Wanderlust.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Wanderlust</h2>
          <p className="max-w-2xl text-xl text-white">
            hey say that in any journey, it’s not the destination that matters,
            but the journey itself. Start the journey.
          </p>
          <SeeMoreButton href="/wanderlust" />
        </motion.div>
      </section>
      {/* SECTION 5 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/Motorsport.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Motorsport</h2>
          <p className="max-w-2xl text-xl text-white">
            Motorsport was born almost at the exact same time as the first car.
            Coincidence? Go back in time.
          </p>
          <SeeMoreButton href="/motorsport-arena" />
        </motion.div>
      </section>
      {/* SECTION 6 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/TwoWheels.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Two Wheels</h2>
          <p className="max-w-2xl text-xl text-white">
            A fresh breeze, perfect weather, and that pure sense of freedom. I’m
            not just describing summer, but the thrill of a motorcycle ride on a
            sunny afternoon. Feel the freedom.
          </p>
          <SeeMoreButton href="/twoWheels" />
        </motion.div>
      </section>
      {/* SECTION 7 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url('/images/About.jpg')] bg-cover bg-center bg-no-repeat px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">About</h2>
          <p className="max-w-2xl text-xl text-white">
            You don't need to check the "About" page to realize I don't own a
            car or a bike. However, you'll discover the passion and the tech
            stack powering this project.
          </p>
          <SeeMoreButton href="/about" />
        </motion.div>
      </section>
    </main>
  );
};

export default page;
