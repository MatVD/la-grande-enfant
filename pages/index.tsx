import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>La Grande Enfant</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1 className="h1">Home</h1>

          <main className={styles.main}>
            <Image
              className="image"
              src="/../public/images/photo.webp"
              fill={true}
              alt="Mon image"
            />
          </main>
        </div>
      </Layout>
    </>
  );
}
