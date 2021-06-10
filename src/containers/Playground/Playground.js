import React, { useState } from "react";
import styles from "./Playground.module.css";
import Select from "../../components/Select/Select";
import { CHARACTER_OPTIONS, SHAPE_OPTIONS } from "../../constants";
import { Select as SelectBase, Button, Input } from "antd";
import { generateSquare, generateTriangle } from "../../utils";

const { Option } = SelectBase;
const { TextArea } = Input;

const Playground = () => {
  const [character, setCharacter] = useState("");
  const [shape, setShape] = useState("");
  const [num, setNum] = useState("");
  const [op, setOp] = useState("Please feed data!");

  const renderCharacterOptions = () =>
    CHARACTER_OPTIONS.map((char) => (
      <Option value={char.value}>{char.label}</Option>
    ));
  const renderShapesOptions = () =>
    SHAPE_OPTIONS.map((char) => (
      <Option value={char.value}>{char.label}</Option>
    ));

  const handleSubmit = () => {
    if (shape === "Square") {
      setOp(generateSquare(character, num));
    } else if (shape === "Triangle") {
      setOp(generateTriangle(character, num));
    } else {
      setOp(generateSquare(character, num));
    }
  };
  const handleClear = () => {
    setCharacter("");
    setShape("");
    setNum("");
    setOp("Please feed data!");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Character <span className={styles.midHeading}>Generator</span>
      </h1>
      <div className={styles.selectWrapper}>
        <Select
          value={character}
          width={200}
          label="Select Character"
          onChange={(val) => setCharacter(val)}
        >
          {renderCharacterOptions()}
        </Select>
        <Select
          value={shape}
          width={200}
          label="Select Shape"
          onChange={(val) => setShape(val)}
        >
          {renderShapesOptions()}
        </Select>
        <Select
          value={num}
          width={200}
          number
          label="Enter Dimension"
          onChange={(val) => setNum(val)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        {character} + {shape} + {num}
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="primary" size={"large"} onClick={handleSubmit}>
          Generate
        </Button>
        <Button type="primary" size={"large"} onClick={handleClear}>
          Reset
        </Button>
      </div>
      <TextArea className={styles.opArea} value={op} rows={7} readOnly />
    </div>
  );
};

export default Playground;
