import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/ninjas.module.css'; 

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {ninjas: data} 
  }
}



function NinjaList({ninjas}) {
  return (
    <>
    <Head>
      <title>
        Ninja List | Ninjas List
      </title>
    </Head>
    <div className={styles.ninjaContainer}>
      <h2>List of Ninjas</h2>
      {ninjas.map((ninja) => (
        <ul key={ninja.id} className={styles.ninjaList}>
          <Link href={'/ninjas/' + ninja.id}>
            <li>
            {ninja.name}
            </li>
          </Link>
        </ul>
      ))}
    </div>
    </>
  )
}

export default NinjaList;