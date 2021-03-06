import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm nakometal. You can contact me on {''} 
          <a href="https://twitter.com/nako0123">Twitter.</a></p>
      </section>
    </Layout>
  );
}
