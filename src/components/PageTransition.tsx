import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key !== prevKey.current) {
      prevKey.current = location.key;
      setStage("exit");
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setStage("enter");
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      setDisplayChildren(children);
    }
  }, [children, location.key]);

  return (
    <div
      className="transition-all duration-200 ease-out"
      style={{
        opacity: stage === "enter" ? 1 : 0,
        transform: stage === "enter" ? "translateY(0)" : "translateY(6px)",
      }}
    >
      {displayChildren}
    </div>
  );
}
