
import Head from "next/head";
import styles from '@/app/page.module.css';

export default function LoginPage() {
  return (
      <>
        <Head>
            <title>Login Page</title>
            <meta name="description" content="This is the login page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1>Login Page</h1>
            <p>This is the login page content.</p>  
        </main>
      </>
  );
}
