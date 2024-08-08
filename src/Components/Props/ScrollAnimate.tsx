import React, { useEffect, useRef, useState } from "react";

type ScrollAnimationProps = {
  children: React.ReactNode;
};

const ScrollAnimate: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const isInViewport = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (ref.current && isInViewport(ref.current)) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 transform ${
        isVisible ? "animate-appear" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
