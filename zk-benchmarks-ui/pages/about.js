import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>zkBenchmarks - About</title>
        <meta name="title" content="zkBenchmarks - About" />
        <meta name="description" content="Zero Knowledge Benchmarks - About" />
      </Head>
      <div className="grid place-items-center">
        <div className="flex justify-center items-center text-lg md:w-96 w-auto text-slate-300">
          zkBenchmarks is ...
        </div>
      </div>
    </div>
  );
}
