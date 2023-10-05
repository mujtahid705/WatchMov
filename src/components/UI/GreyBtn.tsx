import React, { ReactNode } from "react";
import styles from "./GreyBtn.module.css";

interface GreyBtnProps {
  children: ReactNode;
}

const GreyBtn: React.FC<GreyBtnProps> = (props) => {
  return (
    <div className={styles.btn}>
      <p>{props.children}</p>
    </div>
  );
};

export default GreyBtn;
