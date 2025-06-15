'use client';
import { BaseSyntheticEvent } from "react";
import { Status } from "./item";
import styles from "./../page.module.css";

export default function FilterButtons(props: { selectedFilter: Status, click: (event: BaseSyntheticEvent) => void }) {

  return (
    <div className={styles.buttons}>
      <button className={props.selectedFilter === Status.ALL ? styles.active : styles.button} value={Status.ALL} onClick={props.click}>All</button>
      <button className={props.selectedFilter === Status.IN_PROGRESS ? styles.active : styles.button} value={Status.IN_PROGRESS} onClick={props.click}>In Progress</button>
      <button className={props.selectedFilter === Status.COMPLETED ? styles.active : styles.button} value={Status.COMPLETED} onClick={props.click}>Completed</button>
    </div>
  );
}
