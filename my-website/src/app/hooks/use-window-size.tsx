import { useState, useEffect } from "react";

export interface WindowSizeInfo {
  width: number | undefined,
  height: number | undefined
}

interface UseWindowSizeProp {
  callback: (size: WindowSizeInfo) => void
}

// Hook
const useWindowSize = ({callback}: UseWindowSizeProp) => {

    useEffect(() => {

        // only execute all the code below in client side
        if (typeof window !== "undefined") {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                callback({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [callback]); // Empty array ensures that effect is only run on mount

};

export default useWindowSize;