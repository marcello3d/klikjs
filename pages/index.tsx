import { getGames } from "../lib/games";
import { Layout } from "../components/Layout";

export default function Home({ games }) {
  return (
    <Layout>
      <p className="description">
        Classic{" "}
        <a href="https://archive.org/details/win3_KlikPlay">Klik &amp; Play</a>{" "}
        games compiled for web with{" "}
        <a href="https://www.clickteam.com/html5-export-module">
          Clickteam Fusion 2.5 HTML Exporter
        </a>
        .
      </p>

      <div className="grid">
        {Object.keys(games).map((id) => {
          const { name, author, date } = games[id];
          return (
            <a href={`games/${id}`} className="card" key={id}>
              <h3>{name}</h3>
              <p>by {author ?? <i>Unknown</i>}</p>
              {date}
            </a>
          );
        })}
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { games: await getGames() },
  };
}
