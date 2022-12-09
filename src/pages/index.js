import Head from "next/head";
import { Header, About, Skills } from "../components";
import { getSkills } from "../data";

export default function Home({ skills }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <About />
      <Skills skills={skills} />
    </>
  );
}

export async function getServerSideProps() {
  const skills = (await getSkills()) || [];


  return {
    props: { skills },
  };
}
