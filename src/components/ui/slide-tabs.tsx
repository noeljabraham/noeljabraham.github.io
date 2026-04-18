import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type SlideTabItem = {
  label: string;
  href: string;
};

type SlideTabsProps = {
  tabs?: SlideTabItem[];
};

export const SlideTabs = ({
  tabs = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
}: SlideTabsProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1
      });
    }
  }, [selected]);

  const handleTabClick = (index: number, href: string) => {
    setSelected(index);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1
          });
        }
      }}
      className="relative mx-auto flex w-full max-w-full flex-nowrap overflow-x-auto rounded-full border-2 border-black bg-[#88aaee] p-1 shadow-[4px_4px_0px_0px_#000] md:w-fit"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => handleTabClick(i, tab.href)}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  onClick: () => void;
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => {
    const itemRef = ref as React.RefObject<HTMLLIElement>;

    return (
      <li
        ref={itemRef}
        onClick={onClick}
        onMouseEnter={() => {
          if (!itemRef?.current) return;

          const { width } = itemRef.current.getBoundingClientRect();

          setPosition({
            left: itemRef.current.offsetLeft,
            width,
            opacity: 1
          });
        }}
        className="relative z-10 block shrink-0 cursor-pointer px-3 py-1.5 text-xs font-semibold uppercase text-black md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

const Cursor = ({
  position
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        ...position
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
