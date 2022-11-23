import React from "react";
import Head from "next/head";
import { Contact } from "../components";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section id="contact" className="my-24">
        <Contact />
      </section>
    </>
  );
}
