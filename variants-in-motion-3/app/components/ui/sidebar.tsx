"use client";
import {
  IconChartBar,
  IconChevronCompactLeft,
  IconChevronCompactRight,
  IconHome,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

import { motion } from "motion/react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <IconChartBar />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <IconUser />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IconSettings />,
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
      closed: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{
        duration: 0.3,
      }}
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        variants={sidebarVariant}
        className={`bg-white shadow-md h-full`}
      >
        <div className="p-4 flex items-center justify-center">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <IconChevronCompactLeft /> : <IconChevronCompactRight />}
          </button>
        </div>
        <div className="relative">
          {/* Sidebar Content */}
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};
