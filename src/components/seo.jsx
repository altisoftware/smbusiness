import Head from "next/head";


const SEO = ({pageTitle}) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - SMBstore`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Ventes de produits cosmétiques, habillements et bien être" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;