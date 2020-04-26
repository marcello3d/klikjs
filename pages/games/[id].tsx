import { getGame, getGameIds } from "../../lib/games";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";

export default function Game({
  id,
  name,
  author,
  date,
  resourcePath,
  width,
  height,
}) {
  const [started, setStarted] = useState(false);
  function startGame() {
    setStarted(true);
  }
  useEffect(() => {
    if (started) {
      new window["Runtime"]("MMFCanvas", `/games/${id}/${resourcePath}`);
    }
  }, [started]);
  return (
    <Layout title={name}>
      <p>
        <b>{name}</b> by {author ?? <i>Unknown</i>}
      </p>
      <div className="game" onClick={startGame} style={{ width, height }}>
        {!started && <div className="preload">Click to load</div>}
        <canvas id="MMFCanvas" width={width} height={height} />
      </div>
      <script
        src={`/games/${id}/src/Runtime.js`}
        type="text/javascript"
      ></script>
      <style jsx>{`
        .game {
          display: relative;
          border: solid 1px #000;
          box-sizing: content-box;
        }
        .game > * {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .preload {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: (await getGameIds()).map((id) => `/games/${id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  return { props: { ...(await getGame(id)), id } };
}
