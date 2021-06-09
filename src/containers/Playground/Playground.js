import React, { useState } from "react";
import styles from "./Playground.module.css";
import Select from "../../components/Select/Select";
import { CHARACTER_OPTIONS, SHAPE_OPTIONS } from "../../constants";
import { Select as SelectBase, Button } from "antd";
import { generateSquare } from "../../utils";

const { Option } = SelectBase;

const Playground = () => {
  const [character, setCharacter] = useState("");
  const [shape, setShape] = useState("");
  const [num, setNum] = useState("");
  const [op, setOp] = useState("");

  const renderCharacterOptions = () =>
    CHARACTER_OPTIONS.map((char) => (
      <Option value={char.value}>{char.label}</Option>
    ));
  const renderShapesOptions = () =>
    SHAPE_OPTIONS.map((char) => (
      <Option value={char.value}>{char.label}</Option>
    ));

  const handleSubmit = () => {
    setOp(generateSquare(character, num));
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Character <span className={styles.midHeading}>Generator</span>
      </h1>
      <div className={styles.selectWrapper}>
        <Select
          width={200}
          label="Select Character"
          onChange={(val) => setCharacter(val)}
        >
          {renderCharacterOptions()}
        </Select>
        <Select
          width={200}
          label="Select Shape"
          onChange={(val) => setShape(val)}
        >
          {renderShapesOptions()}
        </Select>
        <Select
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
      </div>
      <div className={styles.opFrame}>
        <p>{op}</p>
      </div>
    </div>
  );
};

export default Playground;
