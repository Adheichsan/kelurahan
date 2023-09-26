import React from "react";
import Head from "next/head";

function MetaHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.png" />
      <link rel="manifest" href="/app.webmanifest"/>
      <meta
        name="description"
        content="Jasa Virtual Reality & Augmented Reality"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta
        property="og:title"
        content="Jasa Virtual Reality & Augmented Reality by smarteye.id"
      />
      <meta property="og:url" content={props.url} />
      <meta
        property="og:description"
        content="Wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality."
      />
      <meta property="og:image" content="/logo/logo-192.jpg" />
      <meta property="og:image" itemprop="image" content="/logo/logo-192.jpg"></meta>
      <meta property="og:type" content="website"/>
      <meta name="theme-color" content="#D8D9DA"/>

      {/* twitter */}
      <meta property="twitter:card" content="/homepages/homepage.png" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content="Jasa Virtual Reality & Augmented Reality by smarteye.id" />
      <meta property="twitter:description" content="Wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality."/>
      <meta property="twitter:image" content="/logo/logo-192.jpg" />
      
      <meta property="whatsapp:number" content="smarteye.id" />
      <meta property="instagram:username" content="smarteyeid" />
      <meta property="discord:server" content="smarteye.id" />
    </Head>
  );
}

export default MetaHead;
