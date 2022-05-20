import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import styles from './Layout.module.css';

type Props ={
  children?: React.ReactNode
}

export const MainLayouts: React.FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
           {/* <html lang="es"/> */}
            <title>Home - Isai Trejo </title>
            <meta name="description" content="Home Page" />
            
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar/>
          <main className={styles.main}>
           {children}
          </main>
        </div>
      )
}
