import React, { useState } from "react";
import styles from "./ExhibitHall.module.scss";

// Stall data structure
const stallsData = {
  largeStalls: [
    { id: "A-1", name: "A-1", width: 9, height: 6, area: 54, x: 60, y: 180 },
    { id: "A-2", name: "A-2", width: 9, height: 6, area: 54, x: 220, y: 180 },
    {
      id: "A-3",
      name: "A-3\nJanikk\nInternational",
      width: 6,
      height: 6,
      area: 36,
      x: 380,
      y: 180,
      subtitle: "Janikk International",
    },
    { id: "A-4", name: "A-4", width: 6, height: 12, area: 72, x: 540, y: 180 },
    { id: "A-5", name: "A-5", width: 6, height: 6, area: 36, x: 60, y: 340 },
    { id: "A-6", name: "A-6", width: 6, height: 6, area: 36, x: 220, y: 340 },
    { id: "A-7", name: "A-7", width: 9, height: 6, area: 54, x: 380, y: 340 },
    { id: "A-8", name: "A-8", width: 9, height: 12, area: 108, x: 540, y: 340 },
  ],
  smallStallsTop: [
    { id: "ST-1", name: "ST-1", area: 9, x: 380, y: 90 },
    { id: "ST-2", name: "ST-2", area: 9, x: 430, y: 90 },
    { id: "ST-3", name: "ST-3", area: 9, x: 480, y: 90 },
    { id: "ST-4", name: "ST-4", area: 9, x: 710, y: 90 },
    { id: "ST-5", name: "ST-5", area: 9, x: 760, y: 90 },
    { id: "ST-6", name: "ST-6", area: 9, x: 810, y: 90 },
    { id: "ST-7", name: "ST-7", area: 9, x: 860, y: 90 },
    { id: "ST-8", name: "ST-8", area: 9, x: 910, y: 90 },
    { id: "ST-9", name: "ST-9", area: 9, x: 960, y: 90 },
    { id: "ST-10", name: "ST-10", area: 9, x: 1010, y: 90 },
    { id: "ST-11", name: "ST-11", area: 9, x: 1230, y: 90 },
    { id: "ST-12", name: "ST-12", area: 9, x: 1280, y: 90 },
  ],
  smallStallsRight: [
    { id: "ST-62", name: "ST-62", area: 9, x: 710, y: 180, col: 0, row: 0 },
    { id: "ST-64", name: "ST-64", area: 9, x: 710, y: 230, col: 0, row: 1 },
    { id: "ST-66", name: "ST-66", area: 9, x: 710, y: 280, col: 0, row: 2 },
    { id: "ST-68", name: "ST-68", area: 9, x: 710, y: 330, col: 0, row: 3 },
    { id: "ST-70", name: "ST-70", area: 9, x: 710, y: 380, col: 0, row: 4 },
    { id: "ST-72", name: "ST-72", area: 9, x: 710, y: 430, col: 0, row: 5 },

    { id: "ST-61", name: "ST-61", area: 9, x: 760, y: 180, col: 1, row: 0 },
    { id: "ST-63", name: "ST-63", area: 9, x: 760, y: 230, col: 1, row: 1 },
    { id: "ST-65", name: "ST-65", area: 9, x: 760, y: 280, col: 1, row: 2 },
    { id: "ST-67", name: "ST-67", area: 9, x: 760, y: 330, col: 1, row: 3 },
    { id: "ST-69", name: "ST-69", area: 9, x: 760, y: 380, col: 1, row: 4 },
    { id: "ST-71", name: "ST-71", area: 9, x: 760, y: 430, col: 1, row: 5 },

    { id: "ST-50", name: "ST-50", area: 9, x: 840, y: 180, col: 2, row: 0 },
    { id: "ST-52", name: "ST-52", area: 9, x: 840, y: 230, col: 2, row: 1 },
    { id: "ST-54", name: "ST-54", area: 9, x: 840, y: 280, col: 2, row: 2 },
    { id: "ST-56", name: "ST-56", area: 9, x: 840, y: 330, col: 2, row: 3 },
    { id: "ST-58", name: "ST-58", area: 9, x: 840, y: 380, col: 2, row: 4 },
    { id: "ST-60", name: "ST-60", area: 9, x: 840, y: 430, col: 2, row: 5 },

    { id: "ST-49", name: "ST-49", area: 9, x: 890, y: 180, col: 3, row: 0 },
    { id: "ST-51", name: "ST-51", area: 9, x: 890, y: 230, col: 3, row: 1 },
    { id: "ST-53", name: "ST-53", area: 9, x: 890, y: 280, col: 3, row: 2 },
    { id: "ST-55", name: "ST-55", area: 9, x: 890, y: 330, col: 3, row: 3 },
    { id: "ST-57", name: "ST-57", area: 9, x: 890, y: 380, col: 3, row: 4 },
    { id: "ST-59", name: "ST-59", area: 9, x: 890, y: 430, col: 3, row: 5 },

    { id: "ST-38", name: "ST-38", area: 9, x: 1100, y: 180, col: 4, row: 0 },
    { id: "ST-40", name: "ST-40", area: 9, x: 1100, y: 230, col: 4, row: 1 },
    { id: "ST-42", name: "ST-42", area: 9, x: 1100, y: 280, col: 4, row: 2 },
    { id: "ST-44", name: "ST-44", area: 9, x: 1100, y: 330, col: 4, row: 3 },
    { id: "ST-46", name: "ST-46", area: 9, x: 1100, y: 380, col: 4, row: 4 },
    { id: "ST-48", name: "ST-48", area: 9, x: 1100, y: 430, col: 4, row: 5 },

    { id: "ST-37", name: "ST-37", area: 9, x: 1150, y: 180, col: 5, row: 0 },
    { id: "ST-39", name: "ST-39", area: 9, x: 1150, y: 230, col: 5, row: 1 },
    { id: "ST-41", name: "ST-41", area: 9, x: 1150, y: 280, col: 5, row: 2 },
    { id: "ST-43", name: "ST-43", area: 9, x: 1150, y: 330, col: 5, row: 3 },
    { id: "ST-45", name: "ST-45", area: 9, x: 1150, y: 380, col: 5, row: 4 },
    { id: "ST-47", name: "ST-47", area: 9, x: 1150, y: 430, col: 5, row: 5 },

    { id: "ST-13", name: "ST-13", area: 9, x: 1230, y: 180, col: 6, row: 0 },
    { id: "ST-14", name: "ST-14", area: 9, x: 1230, y: 280, col: 6, row: 2 },
    { id: "ST-15", name: "ST-15", area: 9, x: 1230, y: 380, col: 6, row: 4 },
    { id: "ST-16", name: "ST-16", area: 9, x: 1230, y: 430, col: 6, row: 5 },
  ],
  smallStallsBottom: [
    { id: "ST-36", name: "ST-36", area: 9, x: 60, y: 500 },
    { id: "ST-35", name: "ST-35", area: 9, x: 110, y: 500 },
    { id: "ST-34", name: "ST-34", area: 9, x: 160, y: 500 },
    { id: "ST-33", name: "ST-33", area: 9, x: 210, y: 500 },
    { id: "ST-32", name: "ST-32", area: 9, x: 260, y: 500 },
    { id: "ST-31", name: "ST-31", area: 9, x: 310, y: 500 },
    { id: "ST-30", name: "ST-30", area: 9, x: 500, y: 500 },
    { id: "ST-29", name: "ST-29", area: 9, x: 550, y: 500 },
    { id: "ST-28", name: "ST-28", area: 9, x: 600, y: 500 },
    { id: "ST-27", name: "ST-27", area: 9, x: 650, y: 500 },
    { id: "ST-26", name: "ST-26", area: 9, x: 700, y: 500 },
    { id: "ST-25", name: "ST-25", area: 9, x: 860, y: 500 },
    { id: "ST-24", name: "ST-24", area: 9, x: 910, y: 500 },
    { id: "ST-23", name: "ST-23", area: 9, x: 960, y: 500 },
    { id: "ST-22", name: "ST-22", area: 9, x: 1010, y: 500 },
    { id: "ST-21", name: "ST-21", area: 9, x: 1060, y: 500 },
    { id: "ST-20", name: "ST-20", area: 9, x: 1110, y: 500 },
    { id: "ST-19", name: "ST-19", area: 9, x: 1160, y: 500 },
    { id: "ST-18", name: "ST-18", area: 9, x: 1210, y: 500 },
    { id: "ST-17", name: "ST-17", area: 9, x: 1260, y: 500 },
  ],
};

const ExhibitHallSelector = () => {
  const [selectedStalls, setSelectedStalls] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  const handleStallClick = (stallId) => {
    setSelectedStalls((prev) => {
      if (prev.includes(stallId)) {
        return prev.filter((id) => id !== stallId);
      } else {
        return [...prev, stallId];
      }
    });
  };

  const handleBook = () => {
    if (selectedStalls.length > 0) {
      alert(
        `Booking ${selectedStalls.length} stalls: ${selectedStalls.join(", ")}`
      );
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2>Select Exhibition Stalls</h2>
          <button className={styles.closeBtn} onClick={handleClose}>
            ×
          </button>
        </div>

        <div className={styles.mapContainer}>
          <svg viewBox="0 0 1400 600" className={styles.mapSvg}>
            {/* Top Labels */}
            <text x="180" y="40" className={styles.labelText}>
              Registration hall
            </text>
            <text x="630" y="40" className={styles.labelText}>
              Panel discussion &
            </text>
            <text x="650" y="55" className={styles.labelText}>
              Inauguration hall
            </text>
            <text x="1240" y="40" className={styles.labelText}>
              VIP
            </text>
            <text x="1220" y="55" className={styles.labelText}>
              Food Court
            </text>

            <text x="180" y="75" className={styles.labelSmall}>
              ENTRANCE
            </text>

            {/* Large Stalls */}
            {stallsData.largeStalls.map((stall) => (
              <g key={stall.id}>
                <rect
                  x={stall.x}
                  y={stall.y}
                  width={stall.width * 15}
                  height={stall.height * 15}
                  className={`${styles.stall} ${styles.largeStall} ${
                    selectedStalls.includes(stall.id) ? styles.selected : ""
                  }`}
                  onClick={() => handleStallClick(stall.id)}
                />
                <text
                  x={stall.x + (stall.width * 15) / 2}
                  y={stall.y + (stall.height * 15) / 2 - 15}
                  className={styles.stallText}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.subtitle || stall.id}
                </text>
                <text
                  x={stall.x + (stall.width * 15) / 2}
                  y={stall.y + (stall.height * 15) / 2 + 5}
                  className={styles.stallTextSmall}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.width}m x {stall.height}m
                </text>
                <text
                  x={stall.x + (stall.width * 15) / 2}
                  y={stall.y + (stall.height * 15) / 2 + 20}
                  className={styles.stallTextSmall}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.area} sq m
                </text>
              </g>
            ))}

            {/* Small Stalls Top */}
            {stallsData.smallStallsTop.map((stall) => (
              <g key={stall.id}>
                <rect
                  x={stall.x}
                  y={stall.y}
                  width={45}
                  height={40}
                  className={`${styles.stall} ${styles.smallStall} ${
                    selectedStalls.includes(stall.id) ? styles.selected : ""
                  }`}
                  onClick={() => handleStallClick(stall.id)}
                />
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 18}
                  className={styles.stallTextSmall}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.id}
                </text>
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 30}
                  className={styles.stallTextTiny}
                  onClick={() => handleStallClick(stall.id)}
                >
                  3m x 3m
                </text>
              </g>
            ))}

            {/* Small Stalls Right Side */}
            {stallsData.smallStallsRight.map((stall) => (
              <g key={stall.id}>
                <rect
                  x={stall.x}
                  y={stall.y}
                  width={45}
                  height={40}
                  className={`${styles.stall} ${styles.smallStall} ${
                    selectedStalls.includes(stall.id) ? styles.selected : ""
                  }`}
                  onClick={() => handleStallClick(stall.id)}
                />
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 18}
                  className={styles.stallTextSmall}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.id}
                </text>
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 30}
                  className={styles.stallTextTiny}
                  onClick={() => handleStallClick(stall.id)}
                >
                  3m x 3m
                </text>
              </g>
            ))}

            {/* Small Stalls Bottom */}
            {stallsData.smallStallsBottom.map((stall) => (
              <g key={stall.id}>
                <rect
                  x={stall.x}
                  y={stall.y}
                  width={45}
                  height={40}
                  className={`${styles.stall} ${styles.smallStall} ${
                    selectedStalls.includes(stall.id) ? styles.selected : ""
                  }`}
                  onClick={() => handleStallClick(stall.id)}
                />
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 18}
                  className={styles.stallTextSmall}
                  onClick={() => handleStallClick(stall.id)}
                >
                  {stall.id}
                </text>
                <text
                  x={stall.x + 22.5}
                  y={stall.y + 30}
                  className={styles.stallTextTiny}
                  onClick={() => handleStallClick(stall.id)}
                >
                  3m x 3m
                </text>
              </g>
            ))}

            {/* EXIT Labels */}
            <text x="380" y="570" className={styles.exitText}>
              EXIT
            </text>
            <text x="340" y="585" className={styles.labelSmall}>
              way to Visitor Food Court
            </text>
            <text x="790" y="570" className={styles.exitText}>
              EXIT
            </text>
          </svg>
        </div>

        <div className={styles.footer}>
          <div className={styles.selectedInfo}>
            <span className={styles.count}>{selectedStalls.length}</span>{" "}
            stall(s) selected
            {selectedStalls.length > 0 && (
              <span className={styles.selectedList}>
                : {selectedStalls.join(", ")}
              </span>
            )}
          </div>
          {selectedStalls.length > 0 && (
            <button className={styles.bookBtn} onClick={handleBook}>
              Book Selected Stalls
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExhibitHallSelector;
