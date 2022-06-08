import { useEffect,useState } from "react";

interface Dimension {
  width: number;
  height: number;
}

const getWindowDimensions = (): Dimension => {
  if (typeof window !== "undefined") { 
  const { innerWidth: width, innerHeight: height } = window ;
  return {
    width,
    height,
  };
}
return {
  width:0,
  height:0,
};
};

/**
 * To get window dimensions for responsive design
 */
export const useWindowDimensions = () => {
  const [dimesion, setDimension] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimension(getWindowDimensions);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return dimesion;
};