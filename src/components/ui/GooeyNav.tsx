import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
  };
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 20,
  particleDistances = [100, 15],
  particleR = 120,
  timeVariance = 300,
  colors = {
    primary: "#008dfe",
    secondary: "#faa41a",
    background: "rgba(255, 255, 255, 0.1)"
  },
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  
  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number
  ) => {
    let rotate = noise(r / 10);
    const colorChoice = Math.random() > 0.5 ? colors.primary : colors.secondary;
    
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 0.8 + noise(0.3),
      color: colorChoice,
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    
    element.style.setProperty("--time", `${bubbleTime}ms`);
    
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", p.color || "#008dfe");
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const liEl = e.currentTarget.parentElement as HTMLElement;
    if (activeIndex === index) return;
    
    setActiveIndex(index);
    updateEffectPosition(liEl);
    
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => p.remove());
    }
    
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(
        {
          currentTarget: e.currentTarget,
        } as React.MouseEvent<HTMLAnchorElement>,
        index
      );
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
            --primary-color: ${colors.primary};
            --secondary-color: ${colors.secondary};
            --background-color: ${colors.background};
          }
          
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          
          .effect.text {
            color: white;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
          
          .effect.text.active {
            color: white;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          }
          
          .effect.filter {
            filter: blur(8px) contrast(150) blur(0);
            mix-blend-mode: screen;
            background: ${colors.background};
            border-radius: 12px;
          }
          
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 12px;
            transition: all 0.3s ease;
          }
          
          .effect.active::after {
            animation: pill 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            transform-origin: center;
          }
          
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease-out 1 -350ms;
          }
          
          .point {
            background: var(--color);
            opacity: 1;
            box-shadow: 0 0 12px var(--color);
            animation: point calc(var(--time)) ease-out 1 -350ms;
          }
          
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          
          li.active {
            color: white;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
          
          li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
            box-shadow: 0 8px 32px rgba(0, 141, 254, 0.3);
          }
          
          li:hover::after {
            opacity: 0.8;
            transform: scale(1);
          }
        `}
      </style>
      
      <div className="relative" ref={containerRef}>
        <nav
          className="flex relative"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex gap-2 md:gap-6 list-none p-0 m-0 relative z-[3]"
            style={{
              color: "white",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`rounded-xl text-sm md:text-base relative cursor-pointer transition-all duration-300 ease-out shadow-lg ${
                  activeIndex === index ? "active" : ""
                }`}
                style={{
                  background: activeIndex === index 
                    ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                    : 'transparent',
                  boxShadow: activeIndex === index 
                    ? `0 8px 32px ${colors.primary}40`
                    : '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none py-3 px-6 inline-block font-semibold relative z-10 transition-all duration-300"
                  style={{
                    color: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;