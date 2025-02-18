"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", href: "#main" },
  { label: "My Work", href: "#my-work" },
  { label: "About Me", href: "#about-me" },
  { label: "Contact Me", href: "#contact-me" },
];

interface HeaderVertical {
  active: string
}

export default function Header({active}: HeaderVertical) {
  const [activeTab, setActiveTab] = useState(active);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeElement = document.querySelector(`a[href="${activeTab}"]`);
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  useEffect(() => {
    if (active) {
      const newActiveTab = `#${active}`;
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }
    }
  }, [active, activeTab]);

  return (
    <div className="flex flex-row sticky top-0 justify-center gap-8 px-5 py-5 bg-darkpurple-300 shadow-thin z-10">
      {tabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          onClick={() => setActiveTab(tab.href)}
          className={` text-white relative transition-opacity duration-300 ${
            activeTab === tab.href ? 'opacity-100' : 'opacity-60 hover:opacity-100'
          }`}
        >
          {tab.label}
        </a>
      ))}

      <motion.div
        className="absolute bottom-0 h-[3px] bg-white rounded"
        animate={{ left: underlineStyle.left, width: underlineStyle.width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
}