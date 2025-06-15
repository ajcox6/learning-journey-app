import { Item, Status } from "./item";
import styles from "./../page.module.css";

export default function ItemList(props: { items: Item[] | null }) {

  const itemsList = props.items && props.items.map((data: Item) =>
    <div key={data.id} className={styles.item}>
      <p className={data.status === Status.COMPLETED ? styles.completed : styles.status}>{data.status}</p>
      <h3>{data.title}</h3>
      <p className={styles.description}>{data.description}</p>
    </div>);

  return (
    <div>{itemsList}</div>
  );
}
