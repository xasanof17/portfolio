import Head from "next/head";
import React from "react";
import { Resume } from "../components";
import { getProjects, getResume, getSkills } from "../data";

export default function ResumePage({ resume, skills, projects }) {
  return (
    <>
      <Head>
        <title>Resume | CV</title>
      </Head>
      <section id="resume" className="my-24">
        <Resume resume={resume} skills={skills} projects={projects} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const resume = (await getResume()) || [];
  const skills = (await getSkills()) || [];
  const projects = (await getProjects()) || [];
  return {
    props: { resume, skills, projects },
  };
}
