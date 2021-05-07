import { useEffect, useState } from "react";

declare let window: any;

export const useAFrame = () => {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [aFrameLoaded, setAFrameLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window && window.AFRAME) {
        setWindowLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (window && window.AFRAME) {
      setAFrameLoaded(true);
    }
  }, [windowLoaded]);

  return { aFrameLoaded };
};
