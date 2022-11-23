import React from "react";
import { useRouter } from "next/router";
import { getProjects } from "../../data";
import { ProjectInfo } from "../../components";

export default function DynamicSlug({ projects }) {
  const router = useRouter();
  const slug = router.query.slug;
  return <>
  {slug == "okeypost" && <ProjectInfo project={projects} />}
  </>;
}

export async function getStaticProps() {
  const projects = (await getProjects()) || [];

  return {
    props: { projects },
  };
}

export async function getStaticPaths() {
  const items = ["okeypost", "onconnect"];
  const paths = items.map((item) => ({
    params: { slug: item },
  }));
  return {
    paths,
    fallback: false,
  };
}
