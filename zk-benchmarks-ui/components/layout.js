import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>zkBenchmarks</title>
        <meta name="title" content="zkBenchmarks" />
        <meta name="description" content="Zero Knowledge Benchmarks" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Twitter */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://zkbenchmarks.vercel.app/"
        />
        <meta property="twitter:title" content="zkBenchmarks" />
        <meta
          property="twitter:description"
          content="Zero Knowledge Benchmarks"
        />
        <meta
          property="twitter:image"
          content="https://zkbenchmarks.vercel.app/socialMedia.png"
        /> */}

        {/* Open Graph */}
        {/* <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://zkbenchmarks.vercel.app/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://zkbenchmarks.vercel.app/socialMedia.png"
          key="ogimage"
        />
        <meta property="og:title" content="zkBenchmarks" key="ogtitle" />
        <meta
          property="og:description"
          content="Zero Knowledge Benchmarks"
          key="ogdesc"
        /> */}
      </Head>
      <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
