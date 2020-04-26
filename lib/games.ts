import { readdir, readFile, readJson } from "fs-extra";
import { resolve } from "path";
import { fileExists } from "next/dist/lib/file-exists";

export type Game = {
  name: string;
  author?: string;
  date?: string;
  tool?: string;
  description?: string;
  runtimeClass: string;
  resourcePath: string;
  width: number;
  height: number;
};

const gamesDir = resolve("public/games");

export async function getGames(): Promise<Record<string, Game>> {
  const directories = await readdir(gamesDir);
  const games: Record<string, Game> = {};
  for (const id of directories) {
    if (/^\./.test(id)) {
      continue;
    }
    const game = await parseGame(id);
    if (game) {
      games[id] = game;
    }
  }
  return games;
}
async function parseGame(id: string): Promise<Game | undefined> {
  const gameDir = resolve(gamesDir, id);
  const infoPath = resolve(gameDir, "info.json");
  const indexPath = resolve(gameDir, "index.html");
  const infoJson = (await fileExists(infoPath))
    ? await readJson(infoPath)
    : undefined;
  if (!infoJson) {
    console.warn(`[games:${id}] no json ${infoPath}`);
  }
  if (!(await fileExists(indexPath))) {
    console.warn(`[games:${id}] could not find ${indexPath}`);
    return;
  }
  const indexHtml = await readFile(indexPath, "utf8");
  const canvasTag = /width="(\d+)" height="(\d+)"/im.exec(indexHtml);
  if (!canvasTag) {
    console.warn(`[games:${id}] could not find canvas tag`);
    return;
  }
  const [, width, height] = canvasTag;
  const runtimeCode = /new (Runtime(?:Dev)?)\("MMFCanvas", "(.+?)"\);/im.exec(
    indexHtml
  );
  if (!runtimeCode) {
    console.warn(`[games:${id}] could not find runtime code`);
    return;
  }
  const [, runtimeClass, resourcePath] = runtimeCode;
  return {
    name: id,
    ...infoJson,
    runtimeClass,
    resourcePath,
    width: parseInt(width, 10),
    height: parseInt(height, 10),
  };
}
export async function getGameIds(): Promise<string[]> {
  return Object.keys(await getGames());
}
export async function getGame(id: string): Promise<Game> {
  return (await getGames())[id];
}
