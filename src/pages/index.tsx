import { Inter } from 'next/font/google';
import Head from 'next/head';
import Landing from '@/components/Landing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hoyodle - Daily Puzzle</title>
        <meta name="description" content="Daily HoYoverse puzzles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}
