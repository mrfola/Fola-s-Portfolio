import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import Hero from '../components/templates/Hero/Hero';
import Header from '../components/organisms/Header/Header';
import MeetFola from '../components/templates/MeetFola/MeetFola';
import JobsOfFola from '../components/templates/JobsOfFola/JobsOfFola';

const Home: NextPage = () => 
{
  return (
    <>
    <Head>
      <title>Fola's Portfolio</title>
      <meta name="description" content="Web developer with over 3 years experience" />
      <link rel="icon" href="https://res.cloudinary.com/dobmssrgt/image/upload/v1665150741/Fola%27s%20portfolio/favicon_fap1p3.svg" />
    </Head>


     <div className={styles.container}>
      <Header/>
      <Hero/>
      <MeetFola/>
      <JobsOfFola/>
    </div>
    </>
  )
}

export default Home
