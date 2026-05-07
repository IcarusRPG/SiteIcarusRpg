import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type AudioTrack = {
  title: string;
  file: string;
};

function formatTrackTitle(fileName: string) {
  const nameWithoutExtension = fileName.replace(/\.mp3$/i, "");
  const normalizedName = nameWithoutExtension.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

  return normalizedName
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      const [firstLetter, ...rest] = Array.from(word.toLocaleLowerCase("pt-BR"));
      return firstLetter ? `${firstLetter.toLocaleUpperCase("pt-BR")}${rest.join("")}` : word;
    })
    .join(" ");
}

export async function GET() {
  const audioDirectory = path.join(process.cwd(), "public", "audio");

  try {
    const files = await fs.readdir(audioDirectory);
    const tracks: AudioTrack[] = files
      .filter((file) => path.extname(file).toLocaleLowerCase("pt-BR") === ".mp3")
      .sort((first, second) => first.localeCompare(second, "pt-BR"))
      .map((file) => ({
        title: formatTrackTitle(file),
        file: `/audio/${encodeURIComponent(file)}`,
      }));

    return NextResponse.json(tracks);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json([]);
    }

    return NextResponse.json({ error: "Não foi possível carregar as ambiências." }, { status: 500 });
  }
}
