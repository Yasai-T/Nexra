import Head from "next/head";
import Link from "../components/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>hello</div>
      <Link href="/test">to test</Link>
    </div>
  );
};

export default Home;
