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
          const { name, author, description, tool } = games[id];
          return (
            <a href={`play/${id}`} className="card" key={id}>
              <p>
                <span className="title">{name}</span>{" "}
                <span className="author">by {author ?? <i>Unknown</i>}</span>
              </p>
              {description && <p className="description">{description}</p>}
            </a>
          );
        })}
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
        }
        .card {
          margin: 0.1rem;
          padding: 0.5rem;
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

        .card .title {
          font-weight: 600;
        }
        .card .author {
          color: #666;
        }
        .card .description {
          margin-top: 0.5rem;
        }
        .card p {
          margin: 0;
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
