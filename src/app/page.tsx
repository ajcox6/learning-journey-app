'use client';
import styles from "./page.module.css";
import { placeholderData } from "./something/placeholder-data";
import { useState } from "react";

export default function Home() {

  enum Status {
    ALL = 'all',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed'
  }

  const [items, setItems] = useState(placeholderData);
  const [selectedFilter, setSelectedFilter] = useState(Status.ALL);

  /**
   * Filter the items in the list and set the selected filter value
   * @param e button clicked event
   */
  const filterButton = (e: any) => {
    const status = e.target.value;

    if (status === Status.IN_PROGRESS) {
      setSelectedFilter(Status.IN_PROGRESS);
      setItems(placeholderData.filter(item => item.status === Status.IN_PROGRESS));
    } else if (status === Status.COMPLETED) {
      setSelectedFilter(Status.COMPLETED);
      setItems(placeholderData.filter(item => item.status === Status.COMPLETED));
    } else {
      setSelectedFilter(Status.ALL);
      setItems(placeholderData);
    }
  }

  const itemsList = items.map(data =>
    <div key={data.id} className={styles.item}>
      <p className={data.status === Status.COMPLETED ? styles.completed : styles.status}>{data.status}</p>
      <h3>{data.title}</h3>
      <p className={styles.description}>{data.description}</p>
    </div>);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Learning Journey Planner</h1>
        <div className={styles.buttons}>
          <button className={selectedFilter === Status.ALL ? styles.active : styles.button} value={Status.ALL} onClick={filterButton}>All</button>
          <button className={selectedFilter === Status.IN_PROGRESS ? styles.active : styles.button} value={Status.IN_PROGRESS} onClick={filterButton}>In Progress</button>
          <button className={selectedFilter === Status.COMPLETED ? styles.active : styles.button} value={Status.COMPLETED} onClick={filterButton}>Completed</button>
        </div>

        <div>{itemsList}</div>
      </main>
    </div>

  );
}
