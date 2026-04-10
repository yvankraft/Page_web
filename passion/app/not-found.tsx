"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Gauge, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Texture de fond : Motif drapeau à damier très discret */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `conic-gradient(#000 0.25turn, #ccc 0.25turn 0.5turn, #000 0.5turn 0.75turn, #ccc 0.75turn)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-2xl text-center space-y-8">
        {/* Chiffre 404 Stylisé */}
        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-slate-900 dark:text-white italic"
          >
            404
          </motion.h1>
          {/* Ligne de vitesse (Racing Line) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 bg-red-600 rounded-full mt-[-10px] md:mt-[-20px]"
          />
        </div>

        {/* Message d'erreur */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-500 font-black uppercase tracking-[0.2em] text-sm">
            <AlertCircle size={18} /> Hors Trajectoire
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
            Drapeau rouge. Vous avez quitté la piste.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée lors d'un
            arrêt aux stands. Revenons sur la grille de départ.
          </p>
        </div>

        {/* Statistiques de course factices (Optionnel pour le style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 border border-slate-100 dark:border-zinc-800 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Position
            </p>
            <p className="text-xl font-black">NC</p>
          </div>
          <div className="p-4 border border-slate-100 dark:border-zinc-800 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Pression
            </p>
            <p className="text-xl font-black">0.0 bar</p>
          </div>
          <div className="hidden md:block p-4 border border-slate-100 dark:border-zinc-800 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Adhérence
            </p>
            <p className="text-xl font-black text-red-500">Basse</p>
          </div>
        </div>

        {/* CTA : Retour à l'accueil */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-lg hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all group">
              <MoveLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Retour à l'accueil
            </button>
          </Link>

          <Link href="/pages/contact">
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border border-slate-200 dark:border-zinc-800 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all">
              <Gauge size={20} />
              Support technique
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
