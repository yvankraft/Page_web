"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "./Tooltip";
import {
  Menu,
  X,
  MessageCircle,
  Heart,
  PlusCircle,
  UserCircle,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const profileHref = "/pages/profil";

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    const baseStyle =
      "flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 whitespace-nowrap";
    return isActive
      ? `${baseStyle} bg-slate-500 text-white`
      : `${baseStyle} hover:bg-slate-100 text-slate-600 dark:text-slate-300`;
  };

  return (
    <nav className="sticky top-1 z-50 mx-2">
      <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-[15px] backdrop-saturate-[180%] border border-white/30 dark:border-white/10 py-2 px-4 flex items-center justify-between rounded-2xl shadow-sm">
        {/* Logo */}
        <Link href="/">
          <Tooltip text="Accueil">
            <h1 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-100 font-bold">
              Auto Passion
            </h1>
          </Tooltip>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {[
            { href: "/motorsport-arena", label: "Motorsport Arena" },
            { href: "/lifestyle", label: "Lifestyle & Utility" },
            { href: "/lh44", label: "LH44" },
            { href: "/innovation", label: "The Innovation Lab" },
            { href: "/journal", label: "The Journal" },
          ].map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} className={getStyle(item.href)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-slate-700 dark:text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100]">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 w-[300px] h-screen bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border-l border-white/20 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-black uppercase tracking-widest">
                  Menu
                </span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} className="text-slate-700 dark:text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {[
                  {
                    href: "/motorsport-arena",
                    icon: <MessageCircle size={22} />,
                    label: "Motorsport Arena",
                  },
                  {
                    href: "/lifestyle",
                    icon: <Heart size={22} />,
                    label: "Lifestyle & Utility",
                  },
                  {
                    href: "/lh44",
                    icon: <PlusCircle size={22} />,
                    label: "LH44",
                  },
                  {
                    href: "/innovation",
                    icon: <UserCircle size={22} />,
                    label: "The Innovation Lab",
                  },
                  {
                    href: "/journal",
                    icon: <UserCircle size={22} />,
                    label: "The Journal",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-zinc-800 border-b border-slate-100 dark:border-zinc-800 transition-colors"
                  >
                    <span className="text-slate-500">{item.icon}</span>
                    <span className="font-bold">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
