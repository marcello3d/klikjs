import Head from "next/head";

export function Layout({
  title,
  children,
}: {
  title?: string;
  children?: any;
}) {
  return (
    <div className="container">
      <Head>
        <title>Klik.js{title && ` - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="/">Klik.js</a>
        </h1>
        {children}
      </main>

      <footer>
        Hacked together by{" "}
        <a href="https://marcello.cellosoft.com/">Marcello</a> using{" "}
        <a href="https://nextjs.org">next.js</a>. Inspired by{" "}
        <a href="http://kliktopia.org">Kliktopia</a>.
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
        }

        footer {
          width: 100%;
          height: 100px;
          padding-top: 1em;
          border-top: 1px solid #eaeaea;
          text-align: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        .title a {
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #444;
        }

        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
