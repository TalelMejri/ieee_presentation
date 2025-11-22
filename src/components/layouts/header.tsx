import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blue_sb from "@/assets/Full_White.png";
import { Menu, X } from "lucide-react";
import GooeyNav from "../ui/GooeyNav";

function HeaderLayout() {
    const [isMobileOpen, setIsOpen] = useState(false);
    const toggleMobileMenu = () => setIsOpen(!isMobileOpen);
    const closeMobileMenu = () => setIsOpen(false);
    const items = [
        { label: "Home", href: "#home" },
        { label: "Team", href: "#team" },
        { label: "Activities", href: "#event" },
        { label: "CSTAM 2.0", href: "#cstam" },
    ];
    return (
        <>
            <header className="w-full z-50 sticky top-0">
                <div
                    className="flex items-center justify-between w-full
              px-6 py-3
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-lg
              sm:mx-auto sm:mt-3 sm:rounded-2xl max-w-6xl"
                >
                    <img
                        src={blue_sb}
                        alt="logo_sb"
                        width={120}
                        className="object-contain"
                    />
                    <div className="hidden sm:flex ">
                        <GooeyNav
                            items={items}
                            particleCount={25}
                            particleDistances={[120, 20]}
                            particleR={140}
                            initialActiveIndex={0}
                            animationTime={700}
                            timeVariance={300}
                            colors={{
                                primary: "#008dfe",
                                secondary: "#faa41a",
                                background: "rgba(255, 255, 255, 0.1)"
                            }}
                        />
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="sm:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {isMobileOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black"
                            onClick={closeMobileMenu}
                        ></motion.div>
                        <motion.nav
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="relative flex flex-col p-6 w-4/5 max-w-sm h-full 
                    bg-gradient-to-b from-gray-900/95 via-gray-800 to-gray-900/95
                    shadow-2xl border-r border-white/10 text-white"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <img
                                    src={blue_sb}
                                    alt="logo"
                                    width={70}
                                    className="object-contain"
                                />
                                <button
                                    onClick={closeMobileMenu}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <X className="h-6 w-6 text-white" />
                                </button>
                            </div>
                            <ul className="flex flex-col gap-12 text-lg font-medium">
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className="flex items-center gap-3 px-4 py-2 rounded-lg 
                          hover:bg-white/10 transition"
                                        >
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="my-8 border-t border-white/10"></div>
                            <div className="mt-auto space-y-4">
                                <p className="text-sm text-gray-400">
                                    ©  {new Date().getFullYear()} IEEE CS ENICarthage SBC. All rights reserved.
                                </p>
                            </div>
                        </motion.nav>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default HeaderLayout;