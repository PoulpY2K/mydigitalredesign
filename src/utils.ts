import { colors } from "@/services/colors";
import { ICircle } from "@/types/ICircle";

export const getRandomArbitrary = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const populateCircles = (max: number, min: number) => {
  let circles: Array<ICircle> = [];

  for (let i = 0; i < Math.random() * (max - min) + min; i++) {
    circles.push({
      size: getRandomArbitrary(16, 46),
      color: colors[getRandomArbitrary(colors.length, 0)],
      position: {
        top: getRandomArbitrary(0, 100),
        left: getRandomArbitrary(0, 100)
      }
    });
  }

  return circles;
};
