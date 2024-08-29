import React from "react";
import styles from "./styles.module.scss";

function Loader() {
  return (
    <div className={styles.base}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
