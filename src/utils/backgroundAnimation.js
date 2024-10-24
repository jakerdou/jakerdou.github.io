// src/utils/backgroundAnimation.js

import { keyframes } from '@emotion/react';

const generateRandomPosition = () => `${Math.random() * 100}%`;

const generateBackground = (x1, y1, x2, y2, x3, y3) => `
  background-color: #2e2e2e;
  background-image: radial-gradient(circle at ${x1} ${y1}, #000080, transparent 40%),
                    radial-gradient(circle at ${x2} ${y2}, #30dd7c, transparent 40%),
                    radial-gradient(circle at ${x3} ${y3}, #787878, transparent 40%);
                    radial-gradient(circle at ${x3} ${y3}, #1717a5, transparent 40%);
                    radial-gradient(circle at ${x3} ${y3}, #18d46b, transparent 40%);
                    radial-gradient(circle at ${x3} ${y3}, #2b4947, transparent 40%);
`;

const createSmoothBackgroundAnimation = () => {
  let keyframesString = '';
  const frameCount = 20; // Number of frames
  for (let i = 0; i <= 100; i += 100 / frameCount) {
    const x1 = generateRandomPosition();
    const y1 = generateRandomPosition();
    const x2 = generateRandomPosition();
    const y2 = generateRandomPosition();
    const x3 = generateRandomPosition();
    const y3 = generateRandomPosition();
    const opacity = Math.sin((i / 100) * Math.PI); // Sine wave for smooth fade in/out
    keyframesString += `
      ${i}% { ${generateBackground(x1, y1, x2, y2, x3, y3, opacity)} }
    `;
  }
  return keyframes`${keyframesString}`;
};

const smoothBackgroundAnimation = createSmoothBackgroundAnimation();

export default smoothBackgroundAnimation;
