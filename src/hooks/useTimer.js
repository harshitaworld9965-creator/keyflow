import { useState, useEffect, useRef } from "react";

export function useTimer(active) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    if (startRef.current === null) {
      startRef.current = Date.now();
    }

    const id = setInterval(() => {
      setElapsed((Date.now() - startRef.current) / 1000);
    }, 100);

    return () => clearInterval(id);
  }, [active]);

  return { elapsed };
}