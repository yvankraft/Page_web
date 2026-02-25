"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

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
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Professional Rig</h2>
          <p className="max-w-2xl text-xl text-gray-400 ">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      {/* SECTION 3 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Family Bond</h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      {/* SECTION 4 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Wanderlust</h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      {/* SECTION 5 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Motorsport</h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      {/* SECTION 6 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">Two Wheels</h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      {/* SECTION 7 : Fond Uni ou autre contenu */}
      <section className="h-screen w-[70vw] m-8 flex flex-col items-center justify-center snap-start bg-zinc-900 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6">About</h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Cette section n'a pas de vidéo, le fond est maintenant sombre et
            uni.
          </p>
        </motion.div>
      </section>
      <div></div>
    </main>
  );
};

export default page;
