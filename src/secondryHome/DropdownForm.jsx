 import React, { useState } from "react";

const JacketForm = () => {
  const bodyOptions = [
    "Select",
    "Melton Wool",
    "Cowhide Leather",
    "Sheep Leather",
    "Faux Leather",
    "Cotton Fleece",
    "Polyester Satin",
    "Cotton Twill",
    "Softshell",
    "Nylon",
  ];

  const collarOptions = [
    "Classic Standup Collar",
    "Overlap Standup Collar",
    "Pro (Shirt) Collar",
    "Zippered Hood",
    "Classic Band Collar",
    "Band Collar",
  ];

  const pocketOptions = [
    "Slash Pocket",
    "Flap Pockets",
    "Snap Pockets",
    "Straight Pockets",
    "Welt Pockets",
    "Zipper Pockets",
  ];

  const [bodyMaterial, setBodyMaterial] = useState("Select");
  const [sleevesMaterial, setSleevesMaterial] = useState("Select");
  const [collar, setCollar] = useState("");
  const [pockets, setPockets] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Body Material */}
      <label style={{ marginRight: "10px" }}>Body Material:</label>
      <select
        value={bodyMaterial}
        onChange={(e) => {
          setBodyMaterial(e.target.value);
          setSleevesMaterial("Select");
        }}
      >
        {bodyOptions.map((material, idx) => (
          <option key={idx} value={material}>
            {material}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* Sleeves Material */}
      <label style={{ marginRight: "10px" }}>Sleeves Material:</label>
      <select
        value={sleevesMaterial}
        onChange={(e) => setSleevesMaterial(e.target.value)}
        disabled={bodyMaterial === "Select"}
      >
        <option value="Select">Select</option>
        {bodyMaterial !== "Select" && (
          <option value={bodyMaterial}>{bodyMaterial}</option>
        )}
      </select>

      <br />
      <br />

      {/* Sleeves Style */}
      <div>
        <h1>Sleeves Style</h1>
        <button>Set-In</button>
        <button>Reglan</button>
      </div>

      <br />

      {/* Collar Style */}
      <div>
        <h1>Collar Style</h1>
        <select value={collar} onChange={(e) => setCollar(e.target.value)}>
          <option value="">Select</option>
          {collarOptions.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <br />

      {/* Pockets Style */}
      <div>
        <h1>Pockets Style</h1>
        <select value={pockets} onChange={(e) => setPockets(e.target.value)}>
          <option value="">Select</option>
          {pocketOptions.map((p, idx) => (
            <option key={idx} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <br />

      {/* Knit Style Left / Right */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Knit Style</h1>
        <h1>Single Line with Border Knit</h1>
      </div>

      <br />

      {/* Small buttons with lines */}
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(5)].map((_, idx) => (
          <button
            key={idx}
            className="bg-white border-collapse border-gray-500 w-[20px] h-[20px] flex items-center justify-center"
            onClick={() =>
              window.location.href =
                "/royal-blue-wool-body-white-leather-sleeves-letterman-jacket/edit?size=M#"
            }
          >
            <hr className="w-full border-t border-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default JacketForm;
