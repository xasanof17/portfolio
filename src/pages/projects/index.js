import Head from "next/head";
import React from "react";
import { Projects } from "../../components";
import { getProjects } from "../../data";

export default function Project({data}) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Projects projects={data}/>
    </>
  );
}

export async function getStaticProps() {
  const data = (await getProjects()) || [];

  return {
    props: { data },
  };
}
