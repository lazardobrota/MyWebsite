import { useEffect } from "react";

export interface WindowSizeInfo {
  width: number | undefined,
  height: number | undefined
}

interface UseWindowSizeProp {
  callback: (size: WindowSizeInfo) => void
}

const useWindowSize = ({ callback }: UseWindowSizeProp) => {

  useEffect(() => {

    if (typeof window !== "undefined") {
      function handleResize() {
        callback({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [callback]);

};

export default useWindowSize;