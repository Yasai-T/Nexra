import Head from "next/head";
import Link from "../components/link";
import EmojiFavicon from "../components/emojiFavicon";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <EmojiFavicon>🐊</EmojiFavicon>
      </Head>

      <div>hello</div>
      <Link href="/test">to test</Link>
    </div>
  );
};

export default Home;
