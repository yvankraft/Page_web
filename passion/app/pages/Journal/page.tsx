"use client";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Page() {
  // Gestion du scroll global pour les effets de la vidéo
  const { scrollYProgress } = useScroll();

  // Effets visuels liés au scroll
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["blur(0px)", "blur(12px)"],
  );
  const opacityValue = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

  const sections = [
    { id: "hero", title: "PASSION", isHero: true },
    {
      id: "professional",
      title: "Professional Rig",
      content: "Explore the world of automotive excellence...",
    },
    { id: "family", title: "Family Bond" },
    { id: "wanderlust", title: "Wanderlust" },
    { id: "motorsport", title: "Motorsport" },
  ];

  return (
    /* CONTENEUR PARENT : Définit le comportement Scroll Snap */
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white">
      {/* BACKGROUND VIDÉO FIXE */}
      <motion.div
        style={{ filter: blurValue, scale: scaleValue }}
        className="fixed inset-0 z-0"
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

      {/* SECTIONS */}
      {sections.map((section) => (
        <section
          key={section.id}
          className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start px-8 text-center"
        >
          {section.isHero ? (
            <motion.h1
              style={{ opacity: opacityValue }}
              className="text-[18vw] font-bold uppercase tracking-tighter mix-blend-difference"
            >
              {section.title}
            </motion.h1>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ margin: "-10%" }} // Déclenche l'animation légèrement avant l'entrée complète
              className="max-w-4xl"
            >
              <h2 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-tight">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </motion.div>
          )}
        </section>
      ))}
    </main>
  );
}
