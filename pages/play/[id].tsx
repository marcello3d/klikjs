import { getGame, getGameIds } from "../../lib/games";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";

function getToolName(tool: string): any {
  switch (tool) {
    case "knp":
      return "Klik & Play";
    case "cnc":
      return "Click and Create";
    case "tgf":
      return "The Games Factory";
    case "mmf":
      return "Multimedia Fusion";
    case "cf":
      return "Clickteam Fusion";
  }
}
function preventDefault(event: React.KeyboardEvent) {
  event.preventDefault();
  event.stopPropagation();
}

export default function Game({
  id,
  name,
  author,
  date,
  runtimeClass,
  description,
  notes,
  tool,
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
      const Runtime = window[runtimeClass];
      // @ts-ignore
      new Runtime("MMFCanvas", `/games/${id}/${resourcePath}`);
    }
  }, [started]);
  return (
    <Layout title={name}>
      <p className="flex">
        <span className="left">
          <b>{name}</b> by {author ?? <i>Unknown</i>}
        </span>
        <span className="right">
          <strong>{date}</strong>
        </span>
      </p>
      {description && <p>{description}</p>}
      <div className="game" onClick={startGame} style={{ width, height }}>
        {!started && <div className="preload">Click to load</div>}
        <canvas id="MMFCanvas" width={width} height={height} />
      </div>
      {notes && <p>Notes: {notes}</p>}
      {tool && <>Made in {getToolName(tool)}</>}
      <script type="text/javascript" src="/midi/timidity.min.js"></script>
      <script
        src={`/games/${id}/src/${runtimeClass}.js`}
        type="text/javascript"
      ></script>
      <style jsx global>{`
        html,
        body {
          overflow: hidden;
        }
      `}</style>
      <style jsx>{`
        p.flex {
          display: flex;
          flex-direction: row;
        }
        .left,
        .right {
          flex-grow: 1;
        }
        .right {
          text-align: right;
        }

        .game {
          display: relative;
          border: solid 1px #000;
          box-sizing: content-box;
        }
        .game > * {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .preload {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: (await getGameIds()).map((id) => `/play/${id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  return { props: { ...(await getGame(id)), id } };
}
