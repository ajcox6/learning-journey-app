import { createClient } from "../../utils/supabase/server";
import Journeys from "./journeys/journeys";
import styles from "./page.module.css";

export default async function Home() {

  const supabase = await createClient();

  const { data: journeys } = await supabase
    .from('journeys')
    .select();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Learning Journey Planner</h1>
        <Journeys journeys={journeys} />
      </main>
    </div>

  );
}
