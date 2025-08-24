import Image from "next/image";
import styles from "./page.module.css";
import { Button } from 'antd';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Button type="primary">Button</Button>
      </main>
    </div>
  );
}
