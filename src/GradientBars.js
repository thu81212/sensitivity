import React from 'react';
import './GradientBars.css';

const GradientBars = () => {
  const bars = [
    { width: 26, height: 772, left: 54, top: 252 },
    { width: 26, height: 772, left: 16, top: 252 },
    { width: 26, height: 772, left: 93, top: 224 },
    { width: 26, height: 773, left: 131, top: 204 },
    { width: 26, height: 772, left: 284, top: 91 },
    { width: 26, height: 772, left: 322, top: 91 },
    { width: 26, height: 772, left: 322, top: 70 },
    { width: 26, height: 771, left: 169, top: 153 },
    { width: 27, height: 772, left: 207, top: 124 },
    { width: 26, height: 772, left: 246, top: 91 },
    { width: 27, height: 772, left: 360, top: 46 },
    { width: 26, height: 773, left: 399, top: 32 },
    { width: 26, height: 752, left: 437, top: 20 },
    { width: 26, height: 708, left: 475, top: 64 },
    { width: 26, height: 697, left: 514, top: 91 },
    { width: 26, height: 749, left: 552, top: 114 },
    { width: 26, height: 742, left: 628, top: 121 },
    { width: 26, height: 690, left: 590, top: 173 },
    { width: 26, height: 742, left: 667, top: 121 },
    { width: 26, height: 772, left: 705, top: 91 },
    { width: 26, height: 772, left: 743, top: 91 },
    { width: 26, height: 772, left: 743, top: 91 },
    { width: 27, height: 771, left: 781, top: 180 },
    { width: 26, height: 772, left: 820, top: 192 },
    { width: 26, height: 772, left: 858, top: 199 },
    { width: 27, height: 771, left: 934, top: 180 },
    { width: 26, height: 773, left: 896, top: 226 },
    { width: 26, height: 771, left: 973, top: 153 },
    { width: 26, height: 771, left: 1011, top: 121 },
    { width: 26, height: 771, left: 1242, top: 121 },
    { width: 26, height: 773, left: 1049, top: 84 },
    { width: 26, height: 773, left: 1203, top: 84 },
    { width: 26, height: 771, left: 1320, top: 199 },
    { width: 26, height: 773, left: 1281, top: 162 },
    { width: 26, height: 771, left: 1398, top: 271 },
    { width: 26, height: 773, left: 1359, top: 234 },
    { width: 26, height: 771, left: 1088, top: 57 },
    { width: 26, height: 771, left: 1164, top: 57 },
    { width: 26, height: 773, left: 1126, top: 32 }
  ];

  return (
    <div className="gradient-bars-container">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="gradient-bar"
          style={{
            width: `${bar.width}px`,
            height: `${bar.height}px`,
            left: `${bar.left}px`,
            top: `${bar.top}px`
          }}
        />
      ))}
    </div>
  );
};

export default GradientBars;
