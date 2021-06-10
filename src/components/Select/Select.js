import React from "react";
import { Select as SelectBase, InputNumber } from "antd";
import styles from "./Select.module.css";

const Select = ({ children, label, width, onChange, number, value }) => {
  return (
    <div style={{ width: width }}>
      <div className={styles.label}>{label} :</div>
      {number ? (
        <InputNumber
          style={{ width: width }}
          onChange={onChange}
          value={value}
        />
      ) : (
        <SelectBase style={{ width: width }} onChange={onChange} value={value}>
          {children}
        </SelectBase>
      )}
    </div>
  );
};

export default Select;
