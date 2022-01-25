import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Agora </title>
    </Head>
      This is the first stuff written for Agora Frontned Read{' '}
    <br />
    <Link href="/about">
        <a>about page</a>
    </Link>
    <Link href='/tailwind'>
      <a>check out to see if tailwind is actually working</a>
    </Link>
    </>
  )
}

export default Home
