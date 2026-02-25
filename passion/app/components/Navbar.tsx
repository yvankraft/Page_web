"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    const baseStyle =
      "flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300";
    return isActive
      ? `${baseStyle} bg-slate-500 text-white`
      : `${baseStyle} hover:bg-slate-100 text-slate-600`;
  };

  return (
    <motion.nav
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="nav flex justify-evenly p-2 text-slate-800 rounded-2xl bg-white shadow-lg w-auto mx-4 my-4 border border-slate-200"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link href="/" className={getStyle("/")}>
          The Hub
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link
          href="/motorsport-arena"
          className={getStyle("/motorsport-arena")}
        >
          Motorsport Arena
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link href="/lifestyle" className={getStyle("/lifestyle")}>
          Lifestyle & Utility
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link href="/lh44" className={getStyle("/lh44")}>
          LH44
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link href="/innovation" className={getStyle("/innovation")}>
          The Innovation Lab
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="div"
      >
        <Link href="/journal" className={getStyle("/journal")}>
          The Journal
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
