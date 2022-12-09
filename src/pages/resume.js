import Head from "next/head";
import React from "react";
import { Resume } from "../components";
import { getProjects, getSkills } from "../data";

export default function ResumePage({skills, projects }) {
  return (
    <>
      <Head>
        <title>Resume | CV</title>
      </Head>
      <section id="resume" className="my-24">
        <Resume  skills={skills} projects={projects} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const skills = (await getSkills()) || [];
  const projects = (await getProjects()) || [];
  return {
    props: { skills, projects },
  };
}
