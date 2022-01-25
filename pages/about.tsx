import Link from 'next/link'
import Head from 'next/head'


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>About Agora</title>
            </Head>
            <h1>First Post</h1>
            <Link href="/">
                <a>Go Back home</a>
            </Link>
        </>
    )
}