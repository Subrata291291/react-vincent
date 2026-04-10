import { useEffect } from "react";
import { gsap } from "../utils/gsap";

const useGSAP = (animation) => {
  useEffect(() => {
    animation(gsap);
  }, []);
};

export default useGSAP;