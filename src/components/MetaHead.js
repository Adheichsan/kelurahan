import React from "react";
import Head from "next/head";

function MetaHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href="/nextjs.png" />
      <link rel="manifest" href="/app.webmanifest"/>
      <meta
        name="description"
        content="Kelurahan Patriot"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta
        property="og:title"
        content="Kelurahan Patriot"
      />
      <meta property="og:url" content={props.url} />
      <meta
        property="og:description"
        content="Kelurahan Patriot"
      />
      <meta property="og:image" content="/logo/logo-192.jpg" />
      <meta property="og:image" itemProp="image" content="/logo/logo-192.jpg"></meta>
      <meta property="og:type" content="website"/>
      <meta name="theme-color" content="#D8D9DA"/>

      {/* twitter */}
      <meta property="twitter:card" content="/images/patriot.png" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content="Patriot" />
      <meta property="twitter:description" content="Patriot"/>
      <meta property="twitter:image" content="/images/patriot.png" />
      
      <meta property="whatsapp:number" content="smarteye.id" />
      <meta property="instagram:username" content="smarteyeid" />
      <meta property="discord:server" content="smarteye.id" />
    </Head>
  );
}

export default MetaHead;
