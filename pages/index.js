import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


function Home() {
  return (
    <>
    <Head>
      <title>
        Ninja List | Home
      </title>
    </Head>
    <div className={styles.container}>
      
      <h1>Welcome to Homepage</h1>
      <p>Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and
         scrambled it to make a type specimen book. It has
         survived not only five centuries</p>
      <p>Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and
         scrambled it to make a type specimen book. It has
         survived not only five centuries</p>
      
      <Link href='/ninjas' className={styles.homeButton}>Go To NinjaList</Link>
    </div>
    
    </>
  )
}

export default Home;